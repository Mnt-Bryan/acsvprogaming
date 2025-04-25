
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import MediaContent from "@/components/common/MediaContent";

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
      <div className="bg-gaming-black bg-[url('https://videogamer.com/wp-content/uploads/Game-Reviews-Header.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Game Reviews</h1>
          <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
            Expert opinions, in-depth analysis, and ratings of the latest games across all platforms.
          </p>
        </div>
      </div>
      
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
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new-releases" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.slice(2, 5).map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
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
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="indie" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gameReviews.slice(3, 6).map((review) => (
                  <Card key={review.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
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
