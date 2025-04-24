
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TournamentsPage = () => {
  const handleRegister = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__gkdAedUNlg5N0xKRkJTNzkyOUJLWlFWNU40RzdIUC4u', '_blank');
  };

  return (
    <MainLayout>
      {/* Registration Banner */}
      <div className="bg-gaming-black">
        <div className="max-w-7xl mx-auto py-10 px-4">
          {/* Banner Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b0ef88a5-f2af-4f09-afe9-1310b9bb4f95.png"
              alt="BIYA eSports Cup of Nations"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Registration Button */}
          <div className="text-center mb-10">
            <Button 
              onClick={handleRegister}
              className="bg-gaming-red hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Register Now
              <ExternalLink className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TournamentsPage;
