
import React from 'react';
import GameReviewCard from './GameReviewCard';

interface GameReview {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  platform: string;
  reviewDate: string;
  excerpt: string;
  reviewerName: string;
  videoId: string | null;
}

interface ReviewTabContentProps {
  reviews: GameReview[];
  showLoadMore?: boolean;
}

const ReviewTabContent = ({ reviews, showLoadMore = false }: ReviewTabContentProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <GameReviewCard key={review.id} review={review} />
        ))}
      </div>
      {showLoadMore && (
        <div className="flex justify-center mt-12">
          <button className="bg-gaming-red hover:bg-red-700 text-white px-6 py-2 rounded">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewTabContent;
