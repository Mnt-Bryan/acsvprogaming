import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Trophy, Newspaper, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import MediaContent from "@/components/common/MediaContent";

const featuredGames = [
  {
    id: 1,
    title: "GTA 6 Release Window Announced",
    image: "https://cdn.vox-cdn.com/thumbor/s3nNXrdRt5nhmq8CDY9Qpt9guag=/0x0:1920x1080/1400x933/filters:focal(940x401:1231x692):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72905011/GTA_6.0.jpeg",
    rating: 4.9,
    category: "News"
  },
  {
    id: 2,
    title: "Final Fantasy 7 Rebirth Review",
    image: "https://assets.reedpop.com/FF7R_header.jpg/BROK/thumbnail/1200x900/quality/100/FF7R_header.jpg",
    rating: 4.8,
    category: "Review"
  },
  {
    id: 3,
    title: "Dragon's Dogma 2 Launch Coverage",
    image: "https://assets.xboxservices.com/assets/6f/21/6f21712b-d7c5-4912-8486-da4efe4829c3.jpg",
    rating: 4.7,
    category: "Review"
  }
];

const latestNews = [
  {
    id: 1,
    title: "PlayStation 5 Pro Officially Announced",
    image: "https://www.digitaltrends.com/wp-content/uploads/2023/03/PlayStation-5-Pro-Price-Release-Date-Specs.jpg",
    excerpt: "Sony confirms PlayStation 5 Pro specifications and holiday 2024 release window, promising significant performance improvements.",
    date: "April 22, 2025"
  },
  {
    id: 2,
    title: "Elden Ring: Shadow of the Erdtree DLC Release Date Revealed",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1045750/ss_e80a907c2c43337e53316c71555c3c9139dd1111.jpg",
    excerpt: "FromSoftware announces June 21st release date for highly anticipated Elden Ring expansion.",
    date: "April 21, 2025"
  },
  {
    id: 3,
    title: "Xbox Developer Direct 2025 Announcements",
    image: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2024/01/Dev-Direct-Hero-72f54fce36338493c659.jpg",
    excerpt: "Microsoft reveals new first-party titles and Game Pass additions in latest showcase event.",
    date: "April 20, 2025"
  }
];

const HomePage = () => {
  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/GYHGkPEIbkn4NwuRVDA6SJ", "_blank");
  };

  return (
    <MainLayout>
      <section className="relative">
        <div className="bg-gaming-black bg-[url('https://assetsio.reedpopcdn.com/Best-gaming-monitors.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-60 pt-16 pb-32 md:pt-24 md:pb-48">
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
        
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/reviews">
              <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
                <CardContent className="pt-6">
                  <div className="text-gaming-red mb-4 flex justify-center">
                    <Gamepad2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Game Reviews</h3>
                  <p className="text-gaming-light-gray text-center mb-4">
                    Expert reviews on the latest and greatest games across all platforms.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/news">
              <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
                <CardContent className="pt-6">
                  <div className="text-gaming-red mb-4 flex justify-center">
                    <Newspaper size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Latest News</h3>
                  <p className="text-gaming-light-gray text-center mb-4">
                    Stay updated with breaking gaming news and industry developments.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/forums">
              <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
                <CardContent className="pt-6">
                  <div className="text-gaming-red mb-4 flex justify-center">
                    <MessageSquare size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gaming-white text-center mb-2">Community Forums</h3>
                  <p className="text-gaming-light-gray text-center mb-4">
                    Join discussions with gamers from all around the world.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
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
              <div key={game.id} className="group block">
                <div className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
                  <MediaContent 
                    title={game.title}
                    imageUrl={game.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
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
                <MediaContent 
                  title={item.title}
                  imageUrl={item.image}
                  aspectRatio="wide"
                />
                <CardContent className="p-6">
                  <span className="text-sm text-gaming-red">{item.date}</span>
                  <h3 className="text-xl font-bold text-gaming-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gaming-light-gray">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gaming-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the ACSV Gaming Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with fellow gamers, share your experiences, and stay updated with the latest in gaming.
          </p>
          <Button size="lg" className="bg-white text-gaming-red hover:bg-gray-100" onClick={handleJoinWhatsApp}>
            Join Our WhatsApp Group
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
