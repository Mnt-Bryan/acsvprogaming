
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Trophy, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Tournament = Tables<"tournaments">;

const TournamentsPage = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTournaments = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("tournaments")
          .select("*")
          .order("start_date", { ascending: true });
        
        if (error) throw error;
        setTournaments(data || []);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments
    .filter(tournament => {
      if (filter === "upcoming") {
        return new Date(tournament.start_date || "") > new Date();
      } else if (filter === "past") {
        return new Date(tournament.end_date || "") < new Date();
      } else if (filter === "current") {
        const now = new Date();
        return new Date(tournament.start_date || "") <= now && new Date(tournament.end_date || "") >= now;
      }
      return true;
    })
    .filter(tournament => {
      if (!searchQuery) return true;
      return tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             (tournament.description || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
             (tournament.location || "").toLowerCase().includes(searchQuery.toLowerCase());
    });

  // Placeholder data for demonstration if no tournaments are available
  const placeholderTournaments = [
    {
      id: 1,
      title: "ACSV FIFA Championship 2025",
      description: "Join the biggest FIFA tournament in Cameroon with players from all over the country competing for the national title and amazing prizes.",
      start_date: "2025-05-15T09:00:00",
      end_date: "2025-05-17T18:00:00",
      location: "Yaoundé, Cameroon",
      image_url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070",
      registration_url: "https://forms.example.com/register-fifa2025"
    },
    {
      id: 2,
      title: "Call of Duty Mobile Tournament",
      description: "The ultimate mobile gaming competition bringing together the best COD Mobile players in the region.",
      start_date: "2025-06-10T10:00:00",
      end_date: "2025-06-12T20:00:00",
      location: "Douala, Cameroon",
      image_url: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?q=80&w=2070",
      registration_url: "https://forms.example.com/register-codmobile"
    },
    {
      id: 3,
      title: "ACSV League of Legends Invitational",
      description: "An international LoL competition featuring teams from across Africa competing for a prize pool of $5,000.",
      start_date: "2025-07-22T09:00:00",
      end_date: "2025-07-24T18:00:00",
      location: "Virtual Event",
      image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
      registration_url: "https://forms.example.com/register-lol-invitational"
    },
  ];

  const displayTournaments = tournaments.length > 0 ? filteredTournaments : placeholderTournaments;

  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gaming-black bg-[url('https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Tournaments</h1>
          <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
            Discover and participate in exciting gaming tournaments organized by ACSV across Cameroon and beyond.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-gaming-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search tournaments..." 
                className="pl-10 bg-black/30 border-gaming-black text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select 
                defaultValue="all"
                value={filter}
                onValueChange={setFilter}
              >
                <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                  <SelectItem value="all">All Tournaments</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="current">Ongoing</SelectItem>
                  <SelectItem value="past">Past Tournaments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tournaments Listing */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-gaming-gray">
                <TabsTrigger value="all" className="data-[state=active]:bg-gaming-red">All Tournaments</TabsTrigger>
                <TabsTrigger value="fifa" className="data-[state=active]:bg-gaming-red">FIFA</TabsTrigger>
                <TabsTrigger value="cod" className="data-[state=active]:bg-gaming-red">Call of Duty</TabsTrigger>
                <TabsTrigger value="other" className="data-[state=active]:bg-gaming-red">Other Games</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              {isLoading ? (
                <div className="text-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gaming-red mx-auto"></div>
                  <p className="mt-4 text-gaming-white">Loading tournaments...</p>
                </div>
              ) : displayTournaments.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gaming-white text-xl">No tournaments found</p>
                  <p className="text-gaming-light-gray mt-2">Please check back later for upcoming events</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayTournaments.map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="fifa">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayTournaments
                  .filter(t => t.title.toLowerCase().includes('fifa'))
                  .map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cod">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayTournaments
                  .filter(t => t.title.toLowerCase().includes('call of duty') || t.title.toLowerCase().includes('cod'))
                  .map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayTournaments
                  .filter(t => !t.title.toLowerCase().includes('fifa') && !t.title.toLowerCase().includes('call of duty') && !t.title.toLowerCase().includes('cod'))
                  .map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Join as an Organizer CTA */}
      <section className="py-16 bg-gaming-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to host your own tournament?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with ACSV to organize and promote your gaming events across Cameroon.
          </p>
          <Button className="bg-white text-gaming-red hover:bg-gray-100">
            Contact Us for Partnership
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

// Tournament Card Component
interface TournamentCardProps {
  tournament: Tournament | any;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const isUpcoming = new Date(tournament.start_date) > new Date();
  const isPast = new Date(tournament.end_date) < new Date();
  const isOngoing = !isUpcoming && !isPast;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <Card className="overflow-hidden bg-gaming-gray border-none hover:transform hover:-translate-y-1 transition duration-300">
      <div className="relative h-48">
        <img 
          src={tournament.image_url || "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071"} 
          alt={tournament.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3">
          {isUpcoming && (
            <Badge className="bg-blue-500 text-white font-medium">Upcoming</Badge>
          )}
          {isOngoing && (
            <Badge className="bg-green-500 text-white font-medium">Ongoing</Badge>
          )}
          {isPast && (
            <Badge className="bg-gray-500 text-white font-medium">Completed</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-white mb-3">{tournament.title}</h3>
        <p className="text-gaming-light-gray text-sm mb-4 line-clamp-2">{tournament.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gaming-light-gray">
            <Calendar className="mr-2" size={16} />
            <span>
              {formatDate(tournament.start_date)} - {formatDate(tournament.end_date)}
            </span>
          </div>
          {tournament.location && (
            <div className="flex items-center text-sm text-gaming-light-gray">
              <MapPin className="mr-2" size={16} />
              <span>{tournament.location}</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {isUpcoming && tournament.registration_url ? (
            <Button 
              className="w-full bg-gaming-red hover:bg-red-700 text-white"
              onClick={() => window.open(tournament.registration_url, '_blank')}
            >
              Register Now
            </Button>
          ) : isOngoing ? (
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open(tournament.registration_url, '_blank')}
            >
              View Live
            </Button>
          ) : (
            <Button 
              className="w-full bg-gaming-gray hover:bg-gray-700 text-white border border-gaming-light-gray"
              onClick={() => {}}
            >
              View Results
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TournamentsPage;
