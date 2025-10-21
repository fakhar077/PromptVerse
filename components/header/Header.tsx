import React from 'react';
// FIX: Corrected import path for Icons.
import { ArrowLeftIcon } from '../icons/Icons';

interface HeaderProps {
    onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#0E1116]/80 backdrop-blur-sm flex-shrink-0">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <ArrowLeftIcon className="w-6 h-6" />
                    <span className="font-semibold">Back to Gallery</span>
                </button>
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-lg text-black">JV</div>
            </div>
        </header>
    );
};

export default Header;