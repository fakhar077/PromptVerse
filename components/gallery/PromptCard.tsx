import React from 'react';
import { Prompt } from '../../prompts/prompts';
import { EyeIcon } from '../icons/Icons';

interface PromptCardProps {
  prompt: Prompt;
  onViewClick: (prompt: Prompt) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onViewClick }) => {
  return (
    <div className="break-inside-avoid mb-4">
      <div
        className="group relative block w-full cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/30"
        onClick={() => onViewClick(prompt)}
      >
        <img
          src={prompt.imageUrl}
          alt={prompt.title}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="font-bold text-md truncate">{prompt.title}</h3>
          <p className="text-sm text-gray-300">by {prompt.user}</p>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); onViewClick(prompt); }}
              className="flex items-center justify-center w-full rounded-full bg-white/10 py-2 px-3 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30"
            >
              <EyeIcon className="w-4 h-4 mr-2" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;