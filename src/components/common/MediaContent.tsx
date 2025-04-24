
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Image } from "lucide-react";

interface MediaContentProps {
  title: string;
  imageUrl: string;
  youtubeVideoId?: string;
  aspectRatio?: "video" | "square" | "wide";
  showTabs?: boolean;
}

const MediaContent = ({ 
  title, 
  imageUrl, 
  youtubeVideoId, 
  aspectRatio = "video", 
  showTabs = true 
}: MediaContentProps) => {
  const [activeTab, setActiveTab] = useState(youtubeVideoId ? "video" : "image");
  
  const aspectRatioClass = {
    video: "aspect-video", // 16:9
    square: "aspect-square", // 1:1
    wide: "aspect-[21/9]" // 21:9 cinematic
  }[aspectRatio];
  
  if (!showTabs || !youtubeVideoId) {
    return (
      <div className="overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full object-cover ${aspectRatioClass}`}
        />
      </div>
    );
  }
  
  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
      <div className="flex justify-center mb-2">
        <TabsList className="bg-gaming-gray">
          <TabsTrigger value="image" className="data-[state=active]:bg-gaming-red flex items-center">
            <Image size={16} className="mr-1" /> Image
          </TabsTrigger>
          <TabsTrigger value="video" className="data-[state=active]:bg-gaming-red flex items-center">
            <Play size={16} className="mr-1" /> Video
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="image" className="mt-0">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full object-cover ${aspectRatioClass}`}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="video" className="mt-0">
        <div className={`overflow-hidden rounded-lg ${aspectRatioClass}`}>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default MediaContent;
