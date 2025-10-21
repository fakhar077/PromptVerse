import React from 'react';
// FIX: Corrected import path for Icons.
import { TwitterIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from '../icons/Icons';

interface FooterProps {
  navigate: (page: 'home' | 'about' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-10">
          
          {/* Section 1: Brand & Socials */}
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-xl md:text-2xl font-extrabold text-green-400">promptVerse</h2>
            <p className="max-w-xs text-xs md:text-sm">
              Your universe for AI-powered creativity. Discover, create, and share groundbreaking prompts.
            </p>
            <div className="flex space-x-4 mt-1 md:mt-2">
              <a href="#" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <GithubIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          
          {/* Section 2: Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('home')} className="hover:text-green-400 transition-colors duration-300 text-sm">Home</button></li>
                <li><button onClick={() => navigate('about')} className="hover:text-green-400 transition-colors duration-300 text-sm">About Us</button></li>
                <li><button onClick={() => navigate('contact')} className="hover:text-green-400 transition-colors duration-300 text-sm">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300 text-sm">API Docs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300 text-sm">Community</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300 text-sm">Support</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300 text-sm">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Newsletter & Developer */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-white">Stay Updated</h3>
            <p className="text-sm">Get the latest in AI creativity and prompt engineering.</p>
            <form className="flex mt-1">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
              />
              <button 
                type="submit" 
                className="bg-[#00E676] text-black font-bold py-2 px-4 rounded-r-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-3 border-t border-gray-800 pt-3">
                 <p className="text-sm text-gray-500">Developed by Fakhar Asif</p>
                 <a href="https://wa.me/923434889866" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors mt-1">
                    <WhatsappIcon />
                    <span>+92 343 4889866</span>
                 </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-3 md:mt-12 md:pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PromptVerse. Made by Fakhar Asif.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;