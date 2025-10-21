import React from 'react';
// FIX: Corrected import path for Icons.
import { StarIcon } from '../icons/Icons';

// --- TYPE DEFINITIONS ---
interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
}

// --- MOCK DATA ---
const mockReviews: Review[] = [
    {
        id: 1,
        name: 'Ali Hassan',
        avatar: 'https://i.pravatar.cc/150?u=ali_hassan_pv',
        rating: 5,
        text: 'PromptVerse ne to mera creative kaam bilkul badal diya hai. Prompts ki quality bohot zabardast hai aur community to kamaal ki hai!',
    },
    {
        id: 2,
        name: 'Sana Ahmed',
        avatar: 'https://i.pravatar.cc/150?u=sana_ahmed_pv',
        rating: 4.5,
        text: 'Artists aur designers ke liye yeh ek behtareen platform hai. Image generation to bohot aala hai. Bas thore aur organization tools hotay to maza aa jata.',
    },
    {
        id: 3,
        name: 'Usman Khan',
        avatar: 'https://i.pravatar.cc/150?u=usman_khan_pv',
        rating: 5,
        text: 'Main ek web developer hoon aur mujhe yahan se UI/UX design ke liye endless inspiration milti hai. \'Web Design\' category to sone ki kaan hai. Sab ko recommend karunga!',
    },
];

// --- STAR RATING COMPONENT ---
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                let starClass = "text-gray-600"; // Empty star
                if (starValue <= fullStars) {
                    starClass = "text-yellow-400"; // Full star
                }
                // Note: Simple version without half-star icon for now
                return <StarIcon key={index} className={`w-5 h-5 ${starClass}`} />;
            })}
        </div>
    );
};


// --- REVIEWS SECTION COMPONENT ---
const Reviews: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Loved by Creators Worldwide
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        See what our community of artists, designers, and developers are saying about PromptVerse.
                    </p>
                    <div className="mt-6 w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockReviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-1"
                            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
                        >
                            <div className="flex items-center mb-4">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-green-500/50" />
                                <div className="ml-4">
                                    <h3 className="font-bold text-white text-lg">{review.name}</h3>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                &ldquo;{review.text}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
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
        </section>
    );
};

export default Reviews;