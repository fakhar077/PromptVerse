import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import ImageDetailPage from './pages/ImageDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminLayout from './components/admin/AdminLayout';
import ImageManager from './components/admin/ImageManager';
import ReviewManager from './components/admin/ReviewManager';
import ContentManager from './components/admin/ContentManager';
import SeoSettings from './components/admin/SeoSettings';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastProvider } from './contexts/ToastContext';
import { images as initialImages } from './data/images';
import { reviews as initialReviews } from './data/reviews';
import { initialContent } from './data/content';
import { Image, Review } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>(initialImages);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [aboutContent, setAboutContent] = useState(initialContent.about);
  const [seoConfig, setSeoConfig] = useState({ title: 'PromptVerse - Discover Viral AI Images & Their Prompts', description: 'Explore the world’s trending AI creations and unlock the prompts behind them.' });
  const [isAdmin, setIsAdmin] = useState(false);
  
  // State for tracking liked images, persisted in localStorage
  const [likedImages, setLikedImages] = useState<Set<string>>(() => {
    try {
      const item = window.localStorage.getItem('likedImages');
      return item ? new Set(JSON.parse(item)) : new Set();
    } catch (error) {
      console.error("Could not parse liked images from localStorage", error);
      return new Set();
    }
  });

  useEffect(() => {
    // Save liked images to localStorage whenever they change
    window.localStorage.setItem('likedImages', JSON.stringify(Array.from(likedImages)));
  }, [likedImages]);


  // Image Handlers
  const handleLike = (imageId: string) => {
    if (likedImages.has(imageId)) {
      return; // Already liked, do nothing
    }
    
    // Add to liked set and update count
    setLikedImages(prev => new Set(prev).add(imageId));
    setImages(prev => prev.map(img => img.id === imageId ? { ...img, likes: img.likes + 1 } : img));
  };

  const handleImageUpload = (newImageData: Omit<Image, 'id' | 'likes'>) => {
    const newImage: Image = { ...newImageData, id: `new-${Date.now()}`, likes: 0 };
    setImages(prev => [newImage, ...prev]);
  };

  const handleImageUpdate = (updatedImage: Image) => {
    setImages(prev => prev.map(img => img.id === updatedImage.id ? updatedImage : img));
  };
  
  const handleImageDelete = (imageId: string) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  // Review Handler
  const handleReviewUpdate = (reviewId: string, status: 'approved' | 'rejected') => {
    setReviews(prev => prev.map(r => r.id === reviewId ? { ...r, status } : r));
  };

  // Content Handlers
  const handleContentUpdate = (newContent: string) => {
    setAboutContent(newContent);
  };
   const handleSeoUpdate = (newSeo: { title: string, description: string }) => {
    setSeoConfig(newSeo);
  };

  // Auth Handlers
  const handleLogin = () => setIsAdmin(true);
  const handleLogout = () => setIsAdmin(false);

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path="/admin" element={isAdmin ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage onLogin={handleLogin} />} />
          
          <Route path="/admin/*" element={
            <ProtectedRoute isAdmin={isAdmin}>
              <AdminLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboardPage images={images} reviews={reviews} />} />
                  <Route path="images" element={<ImageManager images={images} onImageUpload={handleImageUpload} onImageUpdate={handleImageUpdate} onImageDelete={handleImageDelete} />} />
                  <Route path="reviews" element={<ReviewManager reviews={reviews} onReviewUpdate={handleReviewUpdate} />} />
                  <Route path="content" element={<ContentManager aboutContent={aboutContent} onContentUpdate={handleContentUpdate} />} />
                  <Route path="seo" element={<SeoSettings seoConfig={seoConfig} onSeoUpdate={handleSeoUpdate} />} />
                  <Route path="*" element={<Navigate to="dashboard" />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />

          <Route path="/*" element={
            <div className="flex flex-col min-h-screen font-sans">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<GalleryPage images={images} onLike={handleLike} likedImages={likedImages} />} />
                  <Route path="/image/:id" element={<ImageDetailPage images={images} onLike={handleLike} likedImages={likedImages} />} />
                  <Route path="/about" element={<AboutPage content={aboutContent}/>} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
};

export default App;