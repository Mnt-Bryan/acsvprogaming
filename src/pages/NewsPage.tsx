
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Flag, Newspaper, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MediaContent from "@/components/common/MediaContent";

// Updated featured news with real content
const featuredNews = {
  id: 1,
  title: "PlayStation Acquires Kojima Productions in Landmark Deal",
  image: "https://image.api.playstation.com/vulcan/ap/rnd/202208/0913/XvnSeT02r8GOkgHtObWcQHB2.jpg",
  videoId: "aOX0pUn6orE",
  category: "Industry",
  date: "April 22, 2025",
  author: "James Wilson",
  excerpt: "In a groundbreaking move that's sending shockwaves through the gaming industry, Sony Interactive Entertainment has announced the acquisition of Kojima Productions, bringing the legendary game designer Hideo Kojima and his studio under the PlayStation umbrella. The move promises to deliver exclusive next-generation experiences for PlayStation platforms.",
  readTime: "5 min read",
  tags: ["PlayStation", "Kojima Productions", "Acquisition"]
};

// Updated news items with real content
const newsItems = [
  {
    id: 2,
    title: "EA Sports FC 25 Introduces Revolutionary New Engine",
    image: "https://media.contentapi.ea.com/content/dam/ea/fc/fc-25/common/featured/eafc25-featured-16x9.jpg.adapt.crop16x9.1455w.jpg",
    videoId: "aInryJ0soI0",
    category: "Games",
    date: "April 18, 2025",
    author: "Emily Parker",
    excerpt: "Electronic Arts has unveiled EA Sports FC 25, featuring a completely rebuilt game engine that promises the most realistic football simulation to date with advanced physics and AI systems.",
    readTime: "4 min read",
    tags: ["EA Sports", "Sports Games", "Football"]
  },
  {
    id: 3,
    title: "Xbox Game Pass Reaches 50 Million Subscribers",
    image: "https://cdn.vox-cdn.com/thumbor/_G80IHU8b0SG3yUjycYPdYMndTQ=/0x0:2000x1125/920x613/filters:focal(840x403:1160x723):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69456235/xgp_ga_16x9_logo_centertext_stackedtagline_rgb_2000px.0.jpg",
    videoId: "i2roWF78JkE",
    category: "Services",
    date: "April 15, 2025",
    author: "Marcus Johnson",
    excerpt: "Microsoft's gaming subscription service has hit a major milestone of 50 million active subscribers, cementing its position as the dominant force in gaming subscriptions.",
    readTime: "3 min read",
    tags: ["Xbox", "Game Pass", "Microsoft"]
  },
  {
    id: 4,
    title: "Call of Duty: Black Ops 6 Teaser Drops",
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-REVEAL-LIVE-THE-GAME-HEADER.jpg",
    videoId: "WapqVs0ve_U",
    category: "Games",
    date: "April 12, 2025",
    author: "Alex Thompson",
    excerpt: "Activision has released the first cryptic teaser for Call of Duty: Black Ops 6, hinting at a return to a Cold War setting with modern gameplay innovations.",
    readTime: "4 min read",
    tags: ["Call of Duty", "FPS", "Activision"]
  },
  {
    id: 5,
    title: "Steam Deck Pro Officially Announced by Valve",
    image: "https://cdn.akamai.steamstatic.com/steamdeck/images/press/deck_photos/header_steamdeck_transparent.png",
    videoId: "rEN3et7UJGk",
    category: "Hardware",
    date: "April 10, 2025",
    author: "Sarah Miller",
    excerpt: "Valve has unveiled the Steam Deck Pro, featuring improved OLED display, enhanced battery life, and more powerful hardware for portable PC gaming.",
    readTime: "6 min read",
    tags: ["Steam Deck", "Hardware", "Valve"]
  },
  {
    id: 6,
    title: "Minecraft Crosses 300 Million Units Sold",
    image: "https://www.minecraft.net/content/dam/minecraft/home/home-hero-1200x600.jpg",
    videoId: "MmB9b5njVbA",
    category: "Milestone",
    date: "April 8, 2025",
    author: "David Chen",
    excerpt: "Minecraft has become the first game in history to reach 300 million copies sold, continuing its reign as the best-selling video game of all time.",
    readTime: "5 min read",
    tags: ["Minecraft", "Mojang", "Microsoft"]
  }
];

const NewsPage = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gaming-black bg-[url('https://www.oberlo.com/media/1603970279-pexels-photo-3165335.jpeg?fit=max&fm=jpg&w=1824')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Gaming News</h1>
          <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
            Stay updated with the latest happenings in the gaming world. Breaking news, updates, and industry insights.
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
                placeholder="Search news..." 
                className="pl-10 bg-black/30 border-gaming-black text-white" 
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="industry">Industry</SelectItem>
                  <SelectItem value="games">Games</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Categories Tabs */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gaming-gray">
                <TabsTrigger value="all" className="data-[state=active]:bg-gaming-red">All News</TabsTrigger>
                <TabsTrigger value="industry" className="data-[state=active]:bg-gaming-red">Industry</TabsTrigger>
                <TabsTrigger value="games" className="data-[state=active]:bg-gaming-red">Games</TabsTrigger>
                <TabsTrigger value="hardware" className="data-[state=active]:bg-gaming-red">Hardware</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {/* Featured News */}
              <div className="mb-12">
                <Card className="overflow-hidden bg-gaming-black border-none shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-full">
                      <MediaContent 
                        title={featuredNews.title}
                        imageUrl={featuredNews.image}
                        youtubeVideoId={featuredNews.videoId}
                        aspectRatio="video"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gaming-red text-white text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-gaming-red text-sm font-medium">{featuredNews.category}</span>
                          <span className="text-gaming-light-gray text-sm">{featuredNews.date}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredNews.title}</h3>
                        <p className="text-gaming-light-gray mb-4">
                          {featuredNews.excerpt}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gaming-light-gray">By {featuredNews.author}</p>
                          <p className="text-xs text-gaming-light-gray mt-1">{featuredNews.readTime}</p>
                        </div>
                        <Button className="bg-gaming-red hover:bg-red-700 text-white">
                          Read Full Story
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
              
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative">
                      <MediaContent 
                        title={news.title}
                        imageUrl={news.image}
                        youtubeVideoId={news.videoId}
                        aspectRatio="wide"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center text-sm text-gaming-light-gray mb-2">
                        <span>{news.date}</span>
                        <span>{news.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                      <p className="text-gaming-light-gray text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gaming-light-gray">By {news.author}</span>
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <Button className="bg-gaming-red hover:bg-red-700 text-white">Load More News</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="industry" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredNews.category === "Industry" && (
                  <Card key={featuredNews.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative">
                      <MediaContent 
                        title={featuredNews.title}
                        imageUrl={featuredNews.image}
                        youtubeVideoId={featuredNews.videoId}
                        aspectRatio="wide"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
                          {featuredNews.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center text-sm text-gaming-light-gray mb-2">
                        <span>{featuredNews.date}</span>
                        <span>{featuredNews.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{featuredNews.title}</h3>
                      <p className="text-gaming-light-gray text-sm mb-4 line-clamp-3">{featuredNews.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gaming-light-gray">By {featuredNews.author}</span>
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
                {newsItems.filter(item => item.category === "Industry").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative">
                      <MediaContent 
                        title={news.title}
                        imageUrl={news.image}
                        youtubeVideoId={news.videoId}
                        aspectRatio="wide"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center text-sm text-gaming-light-gray mb-2">
                        <span>{news.date}</span>
                        <span>{news.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                      <p className="text-gaming-light-gray text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gaming-light-gray">By {news.author}</span>
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="games" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.filter(item => item.category === "Games").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative">
                      <MediaContent 
                        title={news.title}
                        imageUrl={news.image}
                        youtubeVideoId={news.videoId}
                        aspectRatio="wide"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center text-sm text-gaming-light-gray mb-2">
                        <span>{news.date}</span>
                        <span>{news.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                      <p className="text-gaming-light-gray text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gaming-light-gray">By {news.author}</span>
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hardware" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.filter(item => item.category === "Hardware").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative">
                      <MediaContent 
                        title={news.title}
                        imageUrl={news.image}
                        youtubeVideoId={news.videoId}
                        aspectRatio="wide"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center text-sm text-gaming-light-gray mb-2">
                        <span>{news.date}</span>
                        <span>{news.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                      <p className="text-gaming-light-gray text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gaming-light-gray">By {news.author}</span>
                        <Button variant="link" className="text-gaming-red p-0 h-auto">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12 p-8 bg-gaming-gray rounded-lg">
                <Newspaper className="mx-auto text-gaming-red mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-3">Stay Updated on Hardware News</h3>
                <p className="text-gaming-light-gray mb-6 max-w-xl mx-auto">
                  Get the latest hardware news, reviews, and announcements delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Your email address" className="bg-black/30 border-gaming-black text-white" />
                  <Button className="bg-gaming-red hover:bg-red-700 text-white">Subscribe</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gaming-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss a Gaming Update
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly updates on news, reviews, and community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
            <Button className="bg-white text-gaming-red hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NewsPage;
