
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/GYHGkPEIbkn4NwuRVDA6SJ", "_blank");
  };

  return (
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
  );
};

export default CommunitySection;
