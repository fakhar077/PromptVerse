import React, { useEffect, useState } from 'react';
import { Prompt } from '../../prompts/prompts';
import { useAlerts } from '../../contexts/AlertContext';

interface QuickViewModalProps {
  prompt: Prompt;
  onClose: () => void;
}

const PROMPT_TRUNCATE_LENGTH = 150; // Adjusted for the compact layout

const QuickViewModal: React.FC<QuickViewModalProps> = ({ prompt, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);
  const { addAlert } = useAlerts();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(prompt.prompt).then(() => {
        setIsCopied(true);
        addAlert('Prompt copied to clipboard!', 'success');
        setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
        console.error('Failed to copy prompt: ', err);
        addAlert('Failed to copy prompt.', 'error');
    });
  };
  
  const isLongPrompt = prompt.prompt.length > PROMPT_TRUNCATE_LENGTH;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 shadow-2xl w-full rounded-lg max-w-sm sm:max-w-xl max-h-[90vh] flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Column */}
        <div className="w-5/12 flex-shrink-0 bg-black/20">
          <img src={prompt.imageUrl} alt={prompt.title} className="w-full h-full object-contain" />
        </div>

        {/* Content Column */}
        <div className="w-7/12 p-3 sm:p-5 flex flex-col overflow-y-auto">
          <div className="flex-grow">
            <h2 className="text-base sm:text-xl font-bold text-white mb-1">{prompt.title}</h2>
            <p className="text-xs text-gray-400 mb-3">by {prompt.user}</p>
            
            <h3 className="text-sm font-semibold text-green-400 mb-2">Prompt Details</h3>
            <div className="bg-gray-900 p-2 sm:p-3 rounded-md">
                <p className="text-gray-300 text-xs sm:text-sm whitespace-pre-wrap font-mono leading-relaxed">
                {isLongPrompt && !isPromptExpanded 
                  ? `${prompt.prompt.substring(0, PROMPT_TRUNCATE_LENGTH)}...` 
                  : prompt.prompt}
                </p>
                {isLongPrompt && (
                <button 
                  onClick={() => setIsPromptExpanded(!isPromptExpanded)}
                  className="text-green-400 hover:text-green-300 font-semibold text-xs mt-2"
                >
                  {isPromptExpanded ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0 space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <button
                onClick={handleCopyClick}
                disabled={isCopied}
                className={`w-full text-sm font-bold py-2 px-3 rounded-lg transition-all duration-200 ${
                  isCopied
                  ? 'bg-blue-600 text-white cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-500 text-white'
                }`}
              >
                {isCopied ? 'Copied!' : 'Copy Prompt'}
              </button>
              <a
                href="https://gemini.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-lg transition-colors"
              >
                Go to Gemini
              </a>
            </div>
            <button 
              onClick={onClose}
              className="w-full text-sm bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default QuickViewModal;