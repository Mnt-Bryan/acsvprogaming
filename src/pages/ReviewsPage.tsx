import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewHero from '@/components/reviews/ReviewHero';
import ReviewFilters from '@/components/reviews/ReviewFilters';
import ReviewTabContent from '@/components/reviews/ReviewTabContent';

const gameReviews = [
  {
    id: 1,
    title: "Final Fantasy VII Rebirth",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/65f60d54e44c50aac58d55913a364fd4edfc8ed4c0cb4331.jpg",
    rating: 4.8,
    category: "RPG",
    platform: "PS5",
    reviewDate: "April 12, 2025",
    excerpt: "Square Enix delivers a masterpiece that expands on the Remake's foundation with an ambitious open world and refined combat system.",
    reviewerName: "Michael Johnson",
    videoId: null
  },
  {
    id: 2,
    title: "Dragon's Dogma 2",
    image: "https://assets-prd.ignimgs.com/2022/06/24/dragons-dogma-2-blog-1656043418068.jpg",
    rating: 4.6,
    category: "Action RPG",
    platform: "Multi-platform",
    reviewDate: "April 8, 2025",
    excerpt: "Capcom's long-awaited sequel is a triumphant return that pushes the boundaries of open-world action RPGs with its emergent gameplay systems.",
    reviewerName: "Sarah Williams",
    videoId: null
  },
  {
    id: 3,
    title: "Elden Ring: Shadow of the Erdtree",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/54cee7f682fa612c3f71febab6e3ad19baa253ca9bfa4227.jpg",
    rating: 4.9,
    category: "Action RPG",
    platform: "Multi-platform",
    reviewDate: "April 5, 2025",
    excerpt: "FromSoftware's massive expansion to the award-winning Elden Ring introduces a hauntingly beautiful new realm filled with challenging encounters.",
    reviewerName: "David Chen",
    videoId: null
  },
  {
    id: 4,
    title: "Senua's Saga: Hellblade II",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2461850/ss_4c546336ee87aaae17b889166344e9fb5441759a.jpg",
    rating: 4.5,
    category: "Action-Adventure",
    platform: "Xbox Series X/PC",
    reviewDate: "March 30, 2025",
    excerpt: "Ninja Theory's sequel is a technical marvel that pushes the boundaries of next-gen storytelling with its unflinching look at mental health.",
    reviewerName: "Emma Taylor",
    videoId: null
  },
  {
    id: 5,
    title: "Silent Hill 2 Remake",
    image: "https://blog.playstation.com/tachyon/2022/10/6e296608a94ea9afe3eb764e11b5f18577307a48.jpg",
    rating: 4.7,
    category: "Horror",
    platform: "PS5/PC",
    reviewDate: "March 25, 2025",
    excerpt: "Bloober Team's reimagining of the horror classic preserves the psychological dread while modernizing the gameplay for a new generation.",
    reviewerName: "Marcus Reynolds",
    videoId: null
  },
  {
    id: 6,
    title: "Avowed",
    image: "https://cdn.vox-cdn.com/thumbor/LqeS_nqA5gDzgMYOzH9qLrLDjZ0=/0x0:3840x2160/1200x675/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/72941183/Screenshot_2024_01_18_184456.0.png",
    rating: 4.4,
    category: "RPG",
    platform: "Xbox Series X/PC",
    reviewDate: "March 20, 2025",
    excerpt: "Obsidian's first-person RPG set in the world of Eora delivers a compelling narrative with deep character customization and moral choices.",
    reviewerName: "Jennifer Lopez",
    videoId: null
  }
];

const ReviewsPage = () => {
  const [filter, setFilter] = useState("all");
  
  return (
    <MainLayout>
      <ReviewHero />
      <ReviewFilters />
      
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gaming-gray">
                <TabsTrigger value="all" className="data-[state=active]:bg-gaming-red">All</TabsTrigger>
                <TabsTrigger value="featured" className="data-[state=active]:bg-gaming-red">Featured</TabsTrigger>
                <TabsTrigger value="new-releases" className="data-[state=active]:bg-gaming-red">New Releases</TabsTrigger>
                <TabsTrigger value="indie" className="data-[state=active]:bg-gaming-red">Indie Gems</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <ReviewTabContent reviews={gameReviews} showLoadMore />
            </TabsContent>
            
            <TabsContent value="featured" className="mt-0">
              <ReviewTabContent reviews={gameReviews.slice(0, 3)} />
            </TabsContent>
            
            <TabsContent value="new-releases" className="mt-0">
              <ReviewTabContent reviews={gameReviews.slice(2, 5)} />
            </TabsContent>
            
            <TabsContent value="indie" className="mt-0">
              <ReviewTabContent reviews={gameReviews.slice(3, 6)} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default ReviewsPage;
