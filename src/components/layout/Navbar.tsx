
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/GYHGkPEIbkn4NwuRVDA6SJ", "_blank");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gaming-black text-gaming-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/487230a8-6dc7-49df-b507-18f55136722e.png" alt="ACSV Logo" className="h-12" />
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
            <Button className="bg-gaming-red hover:bg-red-700 text-white" onClick={handleJoinWhatsApp}>
              Join ACSV
            </Button>
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
          <Button className="w-full bg-gaming-red hover:bg-red-700 text-white" onClick={handleJoinWhatsApp}>
            Join ACSV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
