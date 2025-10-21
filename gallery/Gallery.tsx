import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Prompt } from '../prompts/prompts';
import QuickViewModal from '../components/gallery/QuickViewModal';
import PromptCard from '../components/gallery/PromptCard';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '../components/icons/Icons';

// --- GALLERY COMPONENT ---
interface GalleryProps {
  prompts: Prompt[];
  categories: string[];
  searchQuery: string;
}

const Gallery: React.FC<GalleryProps> = ({ prompts, categories, searchQuery }) => {
  const [quickViewPrompt, setQuickViewPrompt] = useState<Prompt | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('For You');

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  
  useEffect(() => {
    // Prevent background scrolling when the quick view modal is open
    if (quickViewPrompt) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [quickViewPrompt]);

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);
  
  const handleViewClick = (prompt: Prompt) => {
    setQuickViewPrompt(prompt);
  };
  
  const handleCloseQuickView = () => {
    setQuickViewPrompt(null);
  };

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
        // A small buffer is added to account for fractional pixel values.
        const buffer = 2; 
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setShowLeftArrow(scrollLeft > buffer);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - buffer);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    // Timeout to ensure content is loaded and dimensions are correct
    const timer = setTimeout(() => {
        checkScrollButtons();
    }, 100);

    container?.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);

    return () => {
        clearTimeout(timer);
        container?.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons, categories, searchQuery]);

  const handleScroll = (direction: 'left' | 'right') => {
      const container = scrollContainerRef.current;
      if (container) {
          const scrollAmount = container.clientWidth * 0.8;
          container.scrollBy({
              left: direction === 'left' ? -scrollAmount : scrollAmount,
              behavior: 'smooth',
          });
      }
  };

  const filteredPrompts = useMemo(() => {
    let promptsToFilter = prompts;

    // Filter by selected category first
    if (selectedCategory !== 'For You') {
      promptsToFilter = promptsToFilter.filter(prompt => prompt.category === selectedCategory);
    }

    // Then filter by search query
    if (searchQuery.trim() === '') {
      return promptsToFilter;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    return promptsToFilter.filter(prompt =>
      prompt.title.toLowerCase().includes(lowercasedQuery) ||
      prompt.user.toLowerCase().includes(lowercasedQuery) ||
      prompt.category.toLowerCase().includes(lowercasedQuery) ||
      prompt.prompt.toLowerCase().includes(lowercasedQuery)
    );
  }, [selectedCategory, searchQuery, prompts]);

  return (
    <>
      {/* --- Category Bar --- */}
      <div className="relative mb-8">
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 whitespace-nowrap py-2">
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  selectedCategory === category
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {showLeftArrow && (
            <button 
                onClick={() => handleScroll('left')}
                className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pr-4 pl-1"
                aria-label="Scroll left"
            >
                <div className="p-1 rounded-full bg-gray-800/50 hover:bg-gray-700/80 backdrop-blur-sm transition-all duration-200">
                    <ChevronLeftIcon className="w-5 h-5 text-white" />
                </div>
            </button>
        )}
        {showRightArrow && (
            <button 
                onClick={() => handleScroll('right')}
                className="absolute right-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pl-4 pr-1"
                aria-label="Scroll right"
            >
                <div className="p-1 rounded-full bg-gray-800/50 hover:bg-gray-700/80 backdrop-blur-sm transition-all duration-200">
                    <ChevronRightIcon className="w-5 h-5 text-white" />
                </div>
            </button>
        )}
      </div>

      {/* --- Masonry Grid or No Results Message --- */}
      {filteredPrompts.length > 0 ? (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 gap-4">
          {filteredPrompts.map((prompt) => (
            <PromptCard 
              key={prompt.id} 
              prompt={prompt} 
              onViewClick={handleViewClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <div className="inline-block bg-gray-800 p-6 rounded-full mb-4">
              <SearchIcon className="w-12 h-12 text-gray-500" />
          </div>
          <h3 className="text-2xl font-bold text-white">No Results Found</h3>
          <p className="mt-2">Try adjusting your search query or selecting a different category.</p>
        </div>
      )}

      {/* --- Quick View Modal --- */}
      {quickViewPrompt && (
        <QuickViewModal 
          prompt={quickViewPrompt} 
          onClose={handleCloseQuickView}
        />
      )}
    </>
  );
};

export default Gallery;