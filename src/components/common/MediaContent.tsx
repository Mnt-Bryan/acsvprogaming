
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface MediaContentProps {
  title: string;
  imageUrl: string;
  youtubeVideoId?: string;
  aspectRatio?: "video" | "square" | "wide";
}

const MediaContent = ({ 
  title, 
  imageUrl,
  youtubeVideoId,
  aspectRatio = "video"
}: MediaContentProps) => {
  const [showVideo, setShowVideo] = useState(false);
  
  const aspectRatioClass = {
    video: "aspect-video", // 16:9
    square: "aspect-square", // 1:1
    wide: "aspect-[21/9]" // 21:9 cinematic
  }[aspectRatio];
  
  // If there's a YouTube video ID and the user clicked to show the video
  if (youtubeVideoId && showVideo) {
    return (
      <div className="overflow-hidden rounded-lg relative">
        <iframe
          className={`w-full ${aspectRatioClass}`}
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button 
          onClick={() => setShowVideo(false)}
          className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs hover:bg-black"
        >
          Show Image
        </button>
      </div>
    );
  }
  
  return (
    <div className="overflow-hidden rounded-lg relative">
      <img 
        src={imageUrl} 
        alt={title}
        className={`w-full object-cover ${aspectRatioClass}`}
      />
      {youtubeVideoId && (
        <button 
          onClick={() => setShowVideo(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MediaContent;
