
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedGamesSection from "@/components/home/FeaturedGamesSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import CommunitySection from "@/components/home/CommunitySection";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="relative">
        <HeroSection />
        <FeaturesSection />
      </section>
      <FeaturedGamesSection />
      <LatestNewsSection />
      <CommunitySection />
    </MainLayout>
  );
};

export default HomePage;
