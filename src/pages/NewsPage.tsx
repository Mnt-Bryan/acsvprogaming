
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Flag, Newspaper, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Sample news data
const featuredNews = {
  id: 1,
  title: "PlayStation 6 Development Confirmed by Sony Executive",
  image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
  category: "Industry",
  date: "April 20, 2025",
  author: "James Wilson",
  excerpt: "Sony's VP of Hardware Development has confirmed that work on the PlayStation 6 has officially begun, with a tentative release window set for late 2027. The next-gen console promises revolutionary graphics capabilities and enhanced cloud integration.",
  readTime: "5 min read",
  tags: ["PlayStation", "Console", "Hardware"]
};

const newsItems = [
  {
    id: 2,
    title: "Major Update Coming to Fortnite Next Week",
    image: "https://images.unsplash.com/photo-1589241064621-0dae35b37435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Updates",
    date: "April 18, 2025",
    author: "Emily Parker",
    excerpt: "Epic Games announces a groundbreaking update for Fortnite, introducing a completely redesigned map and revolutionary gameplay mechanics that will change how players experience the battle royale phenomenon.",
    readTime: "4 min read",
    tags: ["Fortnite", "Epic Games", "Battle Royale"]
  },
  {
    id: 3,
    title: "ESports Championship Series Expands to Africa",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Esports",
    date: "April 15, 2025",
    author: "Marcus Johnson",
    excerpt: "The Global Championship Series is adding Cameroon and Nigeria to its list of qualifying regions for the 2025 season, marking a significant expansion into the African gaming market.",
    readTime: "3 min read",
    tags: ["Esports", "Africa", "Competitive Gaming"]
  },
  {
    id: 4,
    title: "Rockstar Games Teases New IP in Mysterious Tweet",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Rumors",
    date: "April 12, 2025",
    author: "Alex Thompson",
    excerpt: "Rockstar Games has sent the gaming community into a frenzy with a cryptic social media post that hints at a brand new intellectual property currently in development.",
    readTime: "4 min read",
    tags: ["Rockstar Games", "New Games", "Announcement"]
  },
  {
    id: 5,
    title: "Gaming Industry Carbon Footprint Report Released",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Industry",
    date: "April 10, 2025",
    author: "Sarah Miller",
    excerpt: "A comprehensive study on the environmental impact of the gaming industry reveals both challenges and opportunities for companies to reduce their carbon footprint.",
    readTime: "6 min read",
    tags: ["Environment", "Industry", "Sustainability"]
  },
  {
    id: 6,
    title: "VR Gaming Market Set to Triple by 2028, Says Report",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Market Analysis",
    date: "April 8, 2025",
    author: "David Chen",
    excerpt: "A new market analysis predicts explosive growth for the virtual reality gaming sector, with revenues expected to triple within the next three years as technology becomes more accessible.",
    readTime: "5 min read",
    tags: ["VR", "Market Growth", "Technology"]
  }
];

const NewsPage = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gaming-black bg-[url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
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
                  <SelectItem value="esports">Esports</SelectItem>
                  <SelectItem value="releases">New Releases</SelectItem>
                  <SelectItem value="updates">Updates</SelectItem>
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
                <TabsTrigger value="esports" className="data-[state=active]:bg-gaming-red">Esports</TabsTrigger>
                <TabsTrigger value="releases" className="data-[state=active]:bg-gaming-red">Releases</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {/* Featured News */}
              <div className="mb-12">
                <Card className="overflow-hidden bg-gaming-black border-none shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={featuredNews.image} 
                        alt={featuredNews.title} 
                        className="w-full h-full object-cover" 
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
                    <div className="relative h-48">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover" 
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
                {newsItems.filter(item => item.category === "Industry").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover" 
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
                {featuredNews.category === "Industry" && (
                  <Card className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={featuredNews.image} 
                        alt={featuredNews.title} 
                        className="w-full h-full object-cover" 
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
              </div>
            </TabsContent>
            
            <TabsContent value="esports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.filter(item => item.category === "Esports").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover" 
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
                <h3 className="text-2xl font-bold text-white mb-3">Stay Updated on Esports</h3>
                <p className="text-gaming-light-gray mb-6 max-w-xl mx-auto">
                  Get the latest esports news, tournament updates, and team information delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Your email address" className="bg-black/30 border-gaming-black text-white" />
                  <Button className="bg-gaming-red hover:bg-red-700 text-white">Subscribe</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="releases" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.filter(item => item.category === "Updates" || item.category === "Rumors").map((news) => (
                  <Card key={news.id} className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
                    <div className="relative h-48">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover" 
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
