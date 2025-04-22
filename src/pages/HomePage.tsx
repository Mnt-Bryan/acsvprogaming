
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Trophy, Newspaper, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const featuredGames = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    category: "RPG"
  },
  {
    id: 2,
    title: "God of War: Ragnarök",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9,
    category: "Action-Adventure"
  },
  {
    id: 3,
    title: "Elden Ring",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8,
    category: "Action RPG"
  }
];

const latestNews = [
  {
    id: 1,
    title: "PlayStation 6 Rumors Begin to Surface",
    excerpt: "Industry insiders hint at development roadmap for Sony's next console generation.",
    date: "April 20, 2025"
  },
  {
    id: 2,
    title: "Major Update Coming to Fortnite",
    excerpt: "Epic Games announces groundbreaking Season 12 with radical map changes.",
    date: "April 18, 2025"
  },
  {
    id: 3,
    title: "ESports Championship Series Expands to Africa",
    excerpt: "Global tournament adds Cameroon and Nigeria to qualifying regions for 2025.",
    date: "April 15, 2025"
  }
];

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gaming-black bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-60 pt-16 pb-32 md:pt-24 md:pb-48">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gaming-white mb-6">
                Your Ultimate <span className="text-gaming-red">Gaming</span> Destination
              </h1>
              <p className="text-xl text-gaming-light-gray mb-8">
                Join the ACSV community for the latest game reviews, news, and discussions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gaming-red hover:bg-red-700 text-white">
                  Explore Games
                </Button>
                <Button size="lg" variant="outline" className="border-gaming-white text-gaming-white hover:bg-gaming-white hover:text-gaming-black">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features section overlapping hero */}
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
              <CardContent className="pt-6">
                <div className="text-gaming-red mb-4 flex justify-center">
                  <Gamepad2 size={36} />
                </div>
                <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Game Reviews</h3>
                <p className="text-gaming-light-gray text-center mb-4">
                  Expert reviews on the latest and greatest games across all platforms.
                </p>
                <div className="text-center">
                  <Link to="/reviews" className="text-gaming-red hover:text-red-400 font-medium">
                    Read Reviews
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
              <CardContent className="pt-6">
                <div className="text-gaming-red mb-4 flex justify-center">
                  <Newspaper size={36} />
                </div>
                <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Latest News</h3>
                <p className="text-gaming-light-gray text-center mb-4">
                  Stay updated with breaking gaming news and industry developments.
                </p>
                <div className="text-center">
                  <Link to="/news" className="text-gaming-red hover:text-red-400 font-medium">
                    Read News
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
              <CardContent className="pt-6">
                <div className="text-gaming-red mb-4 flex justify-center">
                  <MessageSquare size={36} />
                </div>
                <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Community Forums</h3>
                <p className="text-gaming-light-gray text-center mb-4">
                  Join discussions with gamers from all around the world.
                </p>
                <div className="text-center">
                  <Link to="/forums" className="text-gaming-red hover:text-red-400 font-medium">
                    Join Forums
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Games Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gaming-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gaming-white">
              <span className="border-b-4 border-gaming-red pb-2">Featured</span> Games
            </h2>
            <Link to="/reviews" className="text-gaming-red hover:text-red-400 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <div key={game.id} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-medium bg-gaming-red text-white px-2 py-1 rounded">
                          {game.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2">{game.title}</h3>
                      </div>
                      <div className="flex items-center bg-black/50 px-2 py-1 rounded">
                        <Trophy size={14} className="text-yellow-400 mr-1" />
                        <span className="text-white font-bold">{game.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-20 bg-gaming-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gaming-white">
              <span className="border-b-4 border-gaming-red pb-2">Latest</span> News
            </h2>
            <Link to="/news" className="text-gaming-red hover:text-red-400 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <Card key={item.id} className="bg-gaming-gray border-none shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition duration-300">
                <CardContent className="p-6">
                  <span className="text-sm text-gaming-red">{item.date}</span>
                  <h3 className="text-xl font-bold text-gaming-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gaming-light-gray mb-4">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="text-gaming-red hover:text-red-400 font-medium inline-flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Community CTA */}
      <section className="py-20 bg-gaming-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the ACSV Gaming Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with fellow gamers, share your experiences, and stay updated with the latest in gaming.
          </p>
          <Button size="lg" className="bg-white text-gaming-red hover:bg-gray-100">
            Sign Up Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
