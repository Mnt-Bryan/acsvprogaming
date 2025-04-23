import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import NewsPage from "./pages/NewsPage";
import ForumsPage from "./pages/ForumsPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import TournamentsPage from "./pages/TournamentsPage";
import AIAssistant from "./components/AIAssistant";
import TournamentCategoriesPage from "./pages/TournamentCategoriesPage";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/forums" element={<ForumsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournaments/categories" element={<TournamentCategoriesPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIAssistant />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
