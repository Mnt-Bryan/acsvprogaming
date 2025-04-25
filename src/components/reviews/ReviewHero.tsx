
import React from 'react';

const ReviewHero = () => {
  return (
    <div className="bg-gaming-black bg-[url('https://videogamer.com/wp-content/uploads/Game-Reviews-Header.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Game Reviews</h1>
        <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
          Expert opinions, in-depth analysis, and ratings of the latest games across all platforms.
        </p>
      </div>
    </div>
  );
};

export default ReviewHero;
