
import { Card, CardContent } from "@/components/ui/card";

interface MediaContentProps {
  title: string;
  imageUrl: string;
  aspectRatio?: "video" | "square" | "wide";
}

const MediaContent = ({ 
  title, 
  imageUrl,
  aspectRatio = "video"
}: MediaContentProps) => {
  const aspectRatioClass = {
    video: "aspect-video", // 16:9
    square: "aspect-square", // 1:1
    wide: "aspect-[21/9]" // 21:9 cinematic
  }[aspectRatio];
  
  return (
    <div className="overflow-hidden rounded-lg">
      <img 
        src={imageUrl} 
        alt={title}
        className={`w-full object-cover ${aspectRatioClass}`}
      />
    </div>
  );
};

export default MediaContent;

