
import MainLayout from "@/components/layout/MainLayout";

const TournamentCategoriesPage = () => {
  // You might later fetch categories/tournament info from Supabase here.
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-gaming-red mb-6">Tournament Categories</h2>
        <ul className="space-y-4">
          <li className="bg-gaming-gray rounded-lg p-4 text-white">
            FIFA: Info about all local and online FIFA tournaments.
          </li>
          <li className="bg-gaming-gray rounded-lg p-4 text-white">
            Call of Duty: Upcoming events, results, and leaderboards for COD tournaments.
          </li>
          <li className="bg-gaming-gray rounded-lg p-4 text-white">
            League of Legends: Details on ACSV LoL tournaments and participation.
          </li>
          <li className="bg-gaming-gray rounded-lg p-4 text-white">
            More games coming soon!
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default TournamentCategoriesPage;
