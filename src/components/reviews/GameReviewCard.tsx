
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import MediaContent from "@/components/common/MediaContent";

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

interface GameReviewCardProps {
  review: GameReview;
}

const GameReviewCard = ({ review }: GameReviewCardProps) => {
  return (
    <Card className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
      <div className="relative">
        <MediaContent 
          title={review.title}
          imageUrl={review.image}
          youtubeVideoId={review.videoId}
          aspectRatio="wide"
        />
        <div className="absolute top-3 right-3 bg-gaming-black/80 px-2 py-1 rounded flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span className="text-white font-bold">{review.rating}</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
            {review.platform}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="text-sm text-gaming-red mb-2 flex justify-between items-center">
          <span>{review.category}</span>
          <span>{review.reviewDate}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
        <p className="text-gaming-light-gray text-sm mb-4">{review.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gaming-light-gray">By {review.reviewerName}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameReviewCard;
