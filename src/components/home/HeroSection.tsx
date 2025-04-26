
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
