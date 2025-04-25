
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Trophy, Newspaper, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import MediaContent from "@/components/common/MediaContent";

// Updated featured games with real-world images
const featuredGames = [
  {
    id: 1,
    title: "Helldivers 2",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202307/2809/c454ae8c03e2eac22a24ced5b864159cfb7eb92efa4dbe26.jpg",
    videoId: "ypBaF_btgOA",
    rating: 4.8,
    category: "Action"
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/ss_bfd3e946be0a2a3e1792c5413793a11f51d47356.jpg",
    videoId: "SAkEUQnxrGY",
    rating: 4.9,
    category: "RPG"
  },
  {
    id: 3,
    title: "Star Wars Outlaws",
    image: "https://cdn1.epicgames.com/offer/ea79751e3deb4e6a854663e11c575998/EGS_StarWarsOutlaws_MassiveEntertainment_S1_2560x1440-3df2e87a0ca5378fa0fd471728f2418e",
    videoId: "WNTQ1tJsJV4",
    rating: 4.5,
    category: "Action-Adventure"
  }
];

// Updated latest news with real-world content
const latestNews = [
  {
    id: 1,
    title: "GTA 6 Release Window Confirmed by Take-Two",
    image: "https://cdn.vox-cdn.com/thumbor/s3nNXrdRt5nhmq8CDY9Qpt9guag=/0x0:1920x1080/1400x933/filters:focal(940x401:1231x692):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72905011/GTA_6.0.jpeg",
    videoId: "QdBZY2fkU-0",
    excerpt: "Take-Two Interactive confirms Grand Theft Auto VI is on track for a Fall 2025 release window during their latest earnings call.",
    date: "April 22, 2025"
  },
  {
    id: 2,
    title: "PlayStation 5 Pro Officially Announced",
    image: "https://www.digitaltrends.com/wp-content/uploads/2023/03/PlayStation-5-Pro-Price-Release-Date-Specs.jpg",
    videoId: "QLkTrWBuQ9g", 
    excerpt: "Sony has officially announced the PlayStation 5 Pro, featuring improved graphics performance and ray tracing capabilities.",
    date: "April 20, 2025"
  },
  {
    id: 3,
    title: "Microsoft's Xbox Developer Direct Event Announced",
    image: "https://i.ytimg.com/vi/4iHmYWRQIjU/maxresdefault.jpg",
    videoId: "YtmD5SWlbP0",
    excerpt: "Microsoft schedules its next Xbox Developer Direct event for May 2025, promising updates on upcoming first-party titles.",
    date: "April 18, 2025"
  }
];

const HomePage = () => {
  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/GYHGkPEIbkn4NwuRVDA6SJ", "_blank");
  };

  return (
    <MainLayout>
      {/* Hero Section */}
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
                  <MediaContent 
                    title={game.title}
                    imageUrl={game.image}
                    youtubeVideoId={game.videoId}
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
                <MediaContent 
                  title={item.title}
                  imageUrl={item.image}
                  youtubeVideoId={item.videoId}
                  aspectRatio="wide"
                />
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
          <Button size="lg" className="bg-white text-gaming-red hover:bg-gray-100" onClick={handleJoinWhatsApp}>
            Join Our WhatsApp Group
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
