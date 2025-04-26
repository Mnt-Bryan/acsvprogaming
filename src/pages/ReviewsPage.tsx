
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewHero from '@/components/reviews/ReviewHero';
import ReviewFilters from '@/components/reviews/ReviewFilters';
import ReviewTabContent from '@/components/reviews/ReviewTabContent';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const gameReviews = [
  {
    id: 1,
    title: "Final Fantasy VII Rebirth",
    image: "/lovable-uploads/d1ac9d6a-7dd0-4021-8a4e-fcb3ccb1f6d6.png",
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
    image: "/lovable-uploads/e17d86f9-6d18-46e9-b855-4c92134a214c.png",
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
    image: "/lovable-uploads/7a9fa154-3d7c-487f-8f86-54181886feee.png",
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
    image: "/lovable-uploads/c72913d1-5666-4f06-b4a5-e65e765a3362.png",
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
    image: "/lovable-uploads/afbe3920-8166-4422-a001-d76230720cc1.png",
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
    image: "/lovable-uploads/9e20d6b6-8187-40ed-abcc-86bb1c7dc92b.png",
    rating: 4.4,
    category: "RPG",
    platform: "Xbox Series X/PC",
    reviewDate: "March 20, 2025",
    excerpt: "Obsidian's first-person RPG set in the world of Eora delivers a compelling narrative with deep character customization and moral choices.",
    reviewerName: "Jennifer Lopez",
    videoId: null
  }
];

const ITEMS_PER_PAGE = 3;

const ReviewsPage = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(gameReviews.length / ITEMS_PER_PAGE);
  
  // Get current reviews based on pagination
  const indexOfLastReview = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstReview = indexOfLastReview - ITEMS_PER_PAGE;
  const currentReviews = gameReviews.slice(indexOfFirstReview, indexOfLastReview);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
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
              <ReviewTabContent reviews={currentReviews} />
              
              <div className="flex justify-center items-center mt-8 gap-4">
                <Button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  variant="outline" 
                  className="bg-gaming-gray border-gaming-red hover:bg-gaming-red hover:text-white"
                >
                  <ChevronLeft className="mr-1" size={16} /> Previous
                </Button>
                <span className="text-gaming-white px-4">
                  Page {currentPage} of {totalPages}
                </span>
                <Button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="bg-gaming-gray border-gaming-red hover:bg-gaming-red hover:text-white"
                >
                  Next <ChevronRight className="ml-1" size={16} />
                </Button>
              </div>
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
