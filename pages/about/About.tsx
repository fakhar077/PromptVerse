import React from 'react';
// FIX: Corrected import path for Icons.
import { MissionIcon, VisionIcon, ValuesIcon } from '../../components/icons/Icons';

const About: React.FC = () => {
    return (
        <div 
            className="space-y-16 sm:space-y-24"
            style={{ animation: `fadeInUp 0.5s ease-out forwards`, opacity: 0 }}
        >
            {/* Hero Section */}
            <section className="text-center pt-12 sm:pt-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    Where <span className="text-green-400">Imagination</span> Meets <span className="text-green-400">Intelligence</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
                    PromptVerse is a cutting-edge platform dedicated to pushing the boundaries of AI-driven creativity. We provide the tools, inspiration, and community for creators to bring their most ambitious digital visions to life.
                </p>
                <div className="mt-8 w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
            </section>

            {/* Mission/Vision/Values Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Mission Card */}
                <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                    <div className="flex justify-center items-center w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-6 ring-2 ring-green-500/30">
                        <MissionIcon className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                    <p className="text-gray-400">
                        To democratize creativity by making advanced AI tools accessible and intuitive for everyone, from hobbyists to professional artists and developers.
                    </p>
                </div>
                {/* Vision Card */}
                <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                    <div className="flex justify-center items-center w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-6 ring-2 ring-green-500/30">
                        <VisionIcon className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                    <p className="text-gray-400">
                        To be the leading universe for creative collaboration between humans and AI, fostering a new era of digital art and innovation.
                    </p>
                </div>
                {/* Values Card */}
                <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                    <div className="flex justify-center items-center w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-6 ring-2 ring-green-500/30">
                        <ValuesIcon className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Our Values</h2>
                    <p className="text-gray-400">
                        We believe in innovation, collaboration, quality, and empowering our community to explore the infinite possibilities of creativity.
                    </p>
                </div>
            </section>
            
            {/* Founder Section */}
            <section className="bg-gray-800/20 ring-1 ring-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                    <img 
                        src="/profile-img.jpg" 
                        alt="Fakhar Asif, Founder of PromptVerse" 
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-green-500/50 shadow-lg shadow-green-500/20"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-green-400 mb-1">Meet the Visionary</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Fakhar Asif</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Fakhar is a passionate innovator and developer with a deep-seated belief in the power of technology to unlock human potential. With a background in AI and a love for digital art, he founded PromptVerse to create a space where technology serves as a catalyst for imagination, empowering creators worldwide to build the future of visual storytelling.
                    </p>
                </div>
            </section>
            
            {/* Brand Story Section */}
            <section className="text-center pb-12 sm:pb-16">
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    From a Spark to a Universe
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    PromptVerse began as a simple idea: what if anyone could command the power of advanced AI to create breathtaking visuals with just a few words? This question sparked a journey of relentless development and innovation. From a late-night coding project to a burgeoning global platform, our story is one of passion for technology and a commitment to building a universe where creativity knows no bounds.
                </p>
            </section>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default About;