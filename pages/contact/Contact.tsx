import React from 'react';
// FIX: Corrected import path for Icons.
import { MailIcon, PhoneIcon, LocationIcon } from '../../components/icons/Icons';

const Contact: React.FC = () => {
    return (
        <div 
            className="space-y-16 sm:space-y-24"
            style={{ animation: `fadeInUp 0.5s ease-out forwards`, opacity: 0 }}
        >
            {/* Header Section */}
            <section className="text-center pt-12 sm:pt-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    Get In <span className="text-green-400">Touch</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
                    We’d love to hear from you! Whether you have a question about our features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="mt-8 w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* Contact Information */}
                <div className="bg-gray-800/20 ring-1 ring-white/5 rounded-2xl p-8 space-y-8">
                    <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                    <p className="text-gray-400">
                        Fill up the form and our team will get back to you within 24 hours.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
                                <PhoneIcon className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Phone</h3>
                                <a href="tel:+923434889866" className="text-gray-300 hover:text-green-400 transition-colors">+92 343 4889866</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
                                <MailIcon className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Email</h3>
                                <a href="mailto:support@promptverse.com" className="text-gray-300 hover:text-green-400 transition-colors">support@promptverse.com</a>
                            </div>
                        </li>
                         <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
                                <LocationIcon className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Address</h3>
                                <p className="text-gray-300">123 Creative Lane, Innovation City, 45678</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                 <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-white/10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="John Doe"
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" 
                            />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="you@example.com"
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" 
                            />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea 
                                id="message"
                                rows={5}
                                placeholder="Your message..."
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#00E676] text-black font-bold py-3 rounded-xl text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
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

export default Contact;