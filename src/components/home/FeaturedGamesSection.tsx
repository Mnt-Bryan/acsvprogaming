
import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import MediaContent from "@/components/common/MediaContent";

interface FeaturedGame {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
}

const featuredGames: FeaturedGame[] = [
  {
    id: 1,
    title: "GTA 6 Release Window Announced",
    image: "/lovable-uploads/ffe16eca-630c-475e-9202-f2b97aace297.png",
    rating: 4.9,
    category: "News"
  },
  {
    id: 2,
    title: "Final Fantasy 7 Rebirth Review",
    image: "/lovable-uploads/7d8604b4-58f3-4fc7-bbf4-0a7eb1287930.png",
    rating: 4.8,
    category: "Review"
  },
  {
    id: 3,
    title: "Dragon's Dogma 2 Launch Coverage",
    image: "/lovable-uploads/621c4607-4d1a-446d-a835-2234a42c147e.png",
    rating: 4.7,
    category: "Review"
  }
];

const FeaturedGamesSection = () => {
  return (
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
  );
};

export default FeaturedGamesSection;
