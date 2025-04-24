import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, user } = useSession();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleJoin = () => {
    navigate("/auth");
    setIsMenuOpen(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await import("@/integrations/supabase/client").then(({ supabase }) =>
      supabase.auth.signOut()
    );
    navigate("/auth");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gaming-black text-gaming-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/3ab5c47a-1203-47d7-bb79-ad6a79718d36.png" alt="ACSV Logo" className="h-12" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Home</Link>
            <Link to="/reviews" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Reviews</Link>
            <Link to="/news" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">News</Link>
            <Link to="/tournaments" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Tournaments</Link>
            <Link to="/about" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">About</Link>
            <Link to="/forums" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Forums</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                <Button className="bg-gaming-gray text-white" onClick={handleProfile}>
                  Profile
                </Button>
                <Button className="bg-gaming-red text-white" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button className="bg-gaming-red hover:bg-red-700 text-white" onClick={handleJoin}>
                Join ACSV
              </Button>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-gaming-black border-t border-gray-800 px-4 py-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 py-3">
          <Link to="/" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/reviews" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          <Link to="/news" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>News</Link>
          <Link to="/tournaments" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>Tournaments</Link>
          <Link to="/about" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/forums" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={() => setIsMenuOpen(false)}>Forums</Link>
          {session ? (
            <>
              <Button className="w-full bg-gaming-gray text-white" onClick={handleProfile}>
                Profile
              </Button>
              <Button className="w-full bg-gaming-red text-white" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button className="bg-gaming-red hover:bg-red-700 text-white w-full" onClick={handleJoin}>
              Join ACSV
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
