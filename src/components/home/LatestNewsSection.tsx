
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MediaContent from "@/components/common/MediaContent";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

const latestNews: NewsItem[] = [
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

const LatestNewsSection = () => {
  return (
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
  );
};

export default LatestNewsSection;
