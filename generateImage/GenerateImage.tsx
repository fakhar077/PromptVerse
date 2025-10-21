import React, { useState, useRef, useCallback } from 'react';
import { Prompt } from '../prompts/prompts';
import { GoogleGenAI, Modality } from "@google/genai";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// FIX: Corrected import path for Icons.
import { UploadCloudIcon, DownloadIcon, XIcon } from '../components/icons/Icons';

// --- TYPE DEFINITIONS ---
type PageState = 'initial' | 'image_uploaded' | 'generating' | 'generated';

// --- HELPER FUNCTION ---
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
};

// --- MAIN COMPONENT ---
interface GenerateImageProps {
  prompt: Prompt;
  onBack: () => void;
  navigate: (page: 'home' | 'about' | 'contact') => void;
}

const GenerateImage: React.FC<GenerateImageProps> = ({ prompt, onBack, navigate }) => {
    const [pageState, setPageState] = useState<PageState>('initial');
    const [uploadedImageFile, setUploadedImageFile] = useState<File | null>(null);
    const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = useCallback((file: File | null) => {
        if (file && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
            setUploadedImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setUploadedImagePreview(previewUrl);
            setPageState('image_uploaded');
            setError(null);
        } else if (file) {
            setError("Please upload a valid image file (PNG, JPG, GIF).");
        }
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(event.target.files?.[0] ?? null);
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        handleFileSelect(event.dataTransfer.files?.[0] ?? null);
    }, [handleFileSelect]);

    const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    
    const handleGenerate = async () => {
        if (!uploadedImageFile) {
            setError("An image must be uploaded to generate.");
            return;
        }
        setPageState('generating');
        setIsLoading(true);
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const base64Data = await fileToBase64(uploadedImageFile);
            const imagePart = { inlineData: { data: base64Data, mimeType: uploadedImageFile.type } };
            const textPart = { text: prompt.prompt };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: { parts: [imagePart, textPart] },
                config: { responseModalities: [Modality.IMAGE] },
            });
            
            const imagePartFromResponse = response.candidates?.[0]?.content?.parts?.find(part => part.inlineData?.mimeType.startsWith('image/'));
            if (imagePartFromResponse?.inlineData) {
                const { data, mimeType } = imagePartFromResponse.inlineData;
                setGeneratedImage(`data:${mimeType};base64,${data}`);
                setPageState('generated');
            } else {
                const textResponse = response.text;
                if (textResponse) {
                    setError(`Image generation failed. The model responded: "${textResponse}"`);
                } else {
                    setError("The model did not return an image. Please try again with a different prompt or image.");
                }
                setPageState('image_uploaded');
            }
        } catch (e) {
            console.error(e);
            let errorMessage = "An error occurred during generation. Please check your API key and network connection.";
            if (e instanceof Error) {
                errorMessage = `An error occurred: ${e.message}`;
            }
            setError(errorMessage);
            setPageState('image_uploaded');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = useCallback(() => {
        setUploadedImageFile(null);
        if (uploadedImagePreview) URL.revokeObjectURL(uploadedImagePreview);
        setUploadedImagePreview(null);
        setGeneratedImage(null);
        setError(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setPageState('initial');
    }, [uploadedImagePreview]);
    
    const handleDownload = useCallback(() => {
        if (!generatedImage) return;
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `generated-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [generatedImage]);

    const UploadArea = () => (
         <label
            htmlFor="file-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-green-500 hover:bg-gray-800/20 transition-all duration-300"
        >
            <UploadCloudIcon className="w-12 h-12 text-gray-500 mb-4" />
            <p className="text-center text-gray-400">
                <span className="font-semibold text-green-400">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG or GIF</p>
        </label>
    );

    const renderRightPanelContent = () => {
        switch (pageState) {
            case 'initial':
                return <UploadArea />;
            case 'image_uploaded':
                return <img src={uploadedImagePreview} alt="Uploaded preview" className="w-full h-full object-cover animate-fade-in" />;
            case 'generating':
                return (
                    <div className="relative w-full h-full">
                        <img src={uploadedImagePreview} alt="Generating from" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
                        </div>
                    </div>
                );
            case 'generated':
                return (
                    <div className="group relative w-full h-full">
                        <img src={generatedImage} alt="Generated result" className="w-full h-full object-cover animate-fade-in" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                            <button onClick={handleDownload} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg backdrop-blur-sm transition-colors">
                                <DownloadIcon className="w-5 h-5" /> Download
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="min-h-screen bg-[#0E1116] text-[#CFCFCF] flex flex-col font-sans">
            <Header onBack={onBack} />
            
            <main className="flex-grow container mx-auto w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-center gap-8">
                {/* Left Section - Source Image */}
                <div className="lg:w-1/2 w-full flex flex-col items-center justify-start gap-4">
                     <div className="bg-[#1A1F25] rounded-2xl w-full aspect-[4/5] max-w-lg shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_8px_rgba(52,211,153,0.2)] ring-1 ring-white/5 overflow-hidden">
                        <img src={prompt.imageUrl} alt="Source prompt" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Right Section - Dynamic Content */}
                <div className="lg:w-1/2 w-full flex flex-col justify-start items-center gap-4 relative">
                    {/* Small Uploaded Preview Card */}
                    {pageState === 'generated' && uploadedImagePreview && (
                         <div className="absolute top-4 right-4 z-10 w-32 bg-[#1A1F25] rounded-lg shadow-lg ring-1 ring-white/10 p-2 animate-fade-in">
                           <img src={uploadedImagePreview} alt="Uploaded thumbnail" className="w-full h-auto object-cover rounded-md" />
                           <button onClick={handleReset} className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-500 rounded-full p-1 text-white transition-colors">
                            <XIcon className="w-4 h-4" />
                           </button>
                        </div>
                    )}

                    <div className="bg-[#1A1F25] rounded-2xl w-full aspect-[4/5] max-w-lg shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_8px_rgba(52,211,153,0.2)] ring-1 ring-white/5 overflow-hidden">
                        <input id="file-upload" ref={fileInputRef} type="file" className="hidden" accept="image/png, image/jpeg, image/gif" onChange={handleFileChange} />
                        {renderRightPanelContent()}
                    </div>
                    
                    {/* Buttons below Right Card */}
                    <div className="w-full max-w-lg flex items-center justify-center gap-4">
                        {pageState !== 'generated' ? (
                             <button
                                onClick={handleGenerate}
                                disabled={pageState !== 'image_uploaded' || isLoading}
                                className="w-full bg-[#00E676] text-black font-bold py-3 rounded-xl text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isLoading ? 'Generating...' : 'Generate Image'}
                            </button>
                        ) : (
                            <>
                                <button onClick={handleGenerate} disabled={isLoading} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl text-lg transition-colors">Generate Again</button>
                                <button onClick={handleReset} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-lg transition-colors">Upload Again</button>
                            </>
                        )}
                    </div>

                    {error && <p className="text-red-400 text-center mt-2 w-full max-w-lg">{error}</p>}
                </div>
            </main>
            {/* FIX: Pass navigate prop to Footer component to resolve missing prop error. */}
            <Footer navigate={navigate} />
             <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: scale(0.95) translateY(10px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
              }
            `}</style>
        </div>
    );
};

export default GenerateImage;