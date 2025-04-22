
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Sample game reviews data
const gameReviews = [
  {
    id: 1,
    title: "The Last of Us Part II",
    image: "https://images.unsplash.com/photo-1627855997433-73ff15c1ff9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.8,
    category: "Action-Adventure",
    platform: "PS5",
    reviewDate: "April 12, 2025",
    excerpt: "A masterpiece that redefines narrative in gaming. The Last of Us Part II delivers an emotional and impactful experience.",
    reviewerName: "Michael Johnson"
  },
  {
    id: 2,
    title: "Halo Infinite",
    image: "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
    rating: 4.3,
    category: "FPS",
    platform: "Xbox Series X",
    reviewDate: "April 8, 2025",
    excerpt: "A return to form for the Halo franchise, with excellent multiplayer and an engaging campaign that fans will love.",
    reviewerName: "Sarah Williams"
  },
  {
    id: 3,
    title: "Horizon Forbidden West",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.6,
    category: "Action RPG",
    platform: "PS5",
    reviewDate: "April 5, 2025",
    excerpt: "Stunning visuals and improved gameplay mechanics make this sequel a must-play for fans of open-world action games.",
    reviewerName: "David Chen"
  },
  {
    id: 4,
    title: "Elden Ring",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.9,
    category: "Action RPG",
    platform: "Multi-platform",
    reviewDate: "March 30, 2025",
    excerpt: "A masterful collaboration between FromSoftware and George R.R. Martin that elevates the souls-like genre to new heights.",
    reviewerName: "Emma Taylor"
  },
  {
    id: 5,
    title: "Star Wars Jedi: Survivor",
    image: "https://images.unsplash.com/photo-1518406479695-812274898f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.5,
    category: "Action-Adventure",
    platform: "Multi-platform",
    reviewDate: "March 25, 2025",
    excerpt: "An excellent follow-up that builds upon its predecessor with refined combat and a compelling narrative.",
    reviewerName: "Marcus Reynolds"
  },
  {
    id: 6,
    title: "Final Fantasy XVI",
    image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.7,
    category: "RPG",
    platform: "PS5",
    reviewDate: "March 20, 2025",
    excerpt: "Square Enix delivers a dramatic, mature take on the Final Fantasy series with exceptional combat and storytelling.",
    reviewerName: "Jennifer Lopez"
  }
];

const ReviewsPage = () => {
  const [filter, setFilter] = useState("all");
  
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gaming-black bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Game Reviews</h1>
          <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
            Expert opinions, in-depth analysis, and ratings of the latest games across all platforms.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-gaming-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search games..." 
                className="pl-10 bg-black/30 border-gaming-black text-white" 
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="ps5">PlayStation 5</SelectItem>
                  <SelectItem value="xbox">Xbox Series X/S</SelectItem>
                  <SelectItem value="pc">PC</SelectItem>
                  <SelectItem value="switch">Nintendo Switch</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="rpg">RPG</SelectItem>
                  <SelectItem value="fps">FPS</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="rating-high">Highest Rated</SelectItem>
                  <SelectItem value="rating-low">Lowest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Categories Tabs */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover" 
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
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <Button className="bg-gaming-red hover:bg-red-700 text-white">Load More Reviews</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.slice(0, 3).map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover" 
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
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new-releases" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.slice(3, 6).map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover" 
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
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="indie" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.slice(1, 4).map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover" 
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
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default ReviewsPage;
