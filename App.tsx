import React, { useState, useEffect } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchOverlay from './components/search/SearchOverlay';
import { AlertProvider } from './contexts/AlertContext';
import AlertContainer from './components/alerts/AlertContainer';

// --- TYPE DEFINITIONS ---
type Page = 'home' | 'about' | 'contact';

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when the search overlay is open
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOpen]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  }
  
  const handleSearchCancel = () => {
    setIsSearchOpen(false);
    setSearchQuery(''); // Reset search query on cancel
  };

  const handleSearchApply = () => {
    setIsSearchOpen(false); // Just close, query persists
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home searchQuery={searchQuery} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home searchQuery={searchQuery} />;
    }
  }

  return (
    <AlertProvider>
      <div className="min-h-full bg-gray-900 text-white flex flex-col">
        <div className="flex-grow">
          <Navbar onSearchClick={() => setIsSearchOpen(true)} navigate={navigate} />

          <main className="container mx-auto px-4 py-6">
            {renderPage()}
          </main>

          <SearchOverlay 
            isOpen={isSearchOpen}
            onApply={handleSearchApply}
            onCancel={handleSearchCancel}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <Footer navigate={navigate} />
        <AlertContainer />
      </div>
    </AlertProvider>
  );
};

export default App;