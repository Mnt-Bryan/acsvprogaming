
import { useState } from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gaming-black text-gaming-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/a5c501d3-8241-4f24-bad2-42f891101aac.png" alt="ACSV Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Home</Link>
            <Link to="/reviews" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Reviews</Link>
            <Link to="/news" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">News</Link>
            <Link to="/forums" className="text-gaming-white hover:text-gaming-red font-medium transition duration-200">Forums</Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gaming-red hover:bg-red-700 text-white">
              Join ACSV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gaming-black border-t border-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-4 py-3">
            <Link to="/" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={toggleMenu}>Home</Link>
            <Link to="/reviews" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={toggleMenu}>Reviews</Link>
            <Link to="/news" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={toggleMenu}>News</Link>
            <Link to="/forums" className="text-gaming-white hover:text-gaming-red font-medium py-2 transition duration-200" onClick={toggleMenu}>Forums</Link>
            <Button className="bg-gaming-red hover:bg-red-700 text-white w-full">
              Join ACSV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
