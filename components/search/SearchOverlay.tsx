import React, { useEffect, useRef } from 'react';
// FIX: Corrected import path for Icons.
import { SearchIcon, XIcon, ArrowRightIcon } from '../icons/Icons';

interface SearchOverlayProps {
  isOpen: boolean;
  onApply: () => void;
  onCancel: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onApply, onCancel, searchQuery, setSearchQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Delay focus slightly to allow for transition
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);
  
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission if it's in a form
      onApply();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex justify-center p-4 pt-[15vh] sm:pt-[20vh]"
      style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
      onClick={onCancel}
    >
      <div 
        className="relative w-full max-w-2xl h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for prompts..."
          className="w-full bg-gray-800 border border-gray-700 rounded-full py-4 pl-14 pr-28 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button 
          onClick={onCancel} 
          className="absolute right-[68px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Cancel search"
        >
           <XIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={onApply} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-green-500 hover:bg-green-400 transition-colors p-2 rounded-full"
          aria-label="Apply search"
        >
           <ArrowRightIcon className="w-6 h-6" />
        </button>
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

export default SearchOverlay;