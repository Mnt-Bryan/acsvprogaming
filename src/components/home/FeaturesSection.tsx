
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Newspaper, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, to }: {
  icon: typeof Gamepad2;
  title: string;
  description: string;
  to: string;
}) => (
  <Link to={to}>
    <Card className="bg-gaming-black border-gaming-red border-t-4 shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
      <CardContent className="pt-6">
        <div className="text-gaming-red mb-4 flex justify-center">
          <Icon size={36} />
        </div>
        <h3 className="text-xl font-bold text-gaming-white text-center mb-2">{title}</h3>
        <p className="text-gaming-light-gray text-center mb-4">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Gamepad2}
          title="Game Reviews"
          description="Expert reviews on the latest and greatest games across all platforms."
          to="/reviews"
        />
        <FeatureCard
          icon={Newspaper}
          title="Latest News"
          description="Stay updated with breaking gaming news and industry developments."
          to="/news"
        />
        <FeatureCard
          icon={MessageSquare}
          title="Community Forums"
          description="Join discussions with gamers from all around the world."
          to="/forums"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
