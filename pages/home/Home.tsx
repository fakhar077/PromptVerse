import React, { useState, useEffect } from 'react';
import { dummyPrompts, categories, Prompt } from '../../prompts/prompts';
// FIX: Corrected import path for Gallery.
import Gallery from '../gallery/Gallery';
import Reviews from '../../components/reviews/Reviews';

interface HomeProps {
    searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrompts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Simulate API call. In a real application, you would fetch from a backend endpoint.
                // e.g., const response = await fetch('https://your-api-url/prompts');
                // const data = await response.json();
                // setPrompts(data);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating network delay
                setPrompts(dummyPrompts);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching prompts.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPrompts();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96" role="status" aria-label="Loading prompts">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-400 py-10" role="alert">
                <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <Gallery 
                prompts={prompts}
                categories={categories}
                searchQuery={searchQuery}
            />
            <Reviews />
        </>
    );
};

export default Home;