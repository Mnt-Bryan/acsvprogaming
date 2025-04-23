
import { Link } from "react-router-dom";
import { Gamepad2, Youtube, Discord, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gaming-black text-gaming-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/a5c501d3-8241-4f24-bad2-42f891101aac.png" 
              alt="ACSV Logo" 
              className="h-16 mb-4" 
            />
            <p className="text-gaming-light-gray text-sm mt-4">
              Passion & compétition au delà du virtuel
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gaming-red">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gaming-red transition duration-200">Home</Link></li>
              <li><Link to="/reviews" className="hover:text-gaming-red transition duration-200">Game Reviews</Link></li>
              <li><Link to="/news" className="hover:text-gaming-red transition duration-200">News</Link></li>
              <li><Link to="/forums" className="hover:text-gaming-red transition duration-200">Community Forums</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gaming-red">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/czwAPjwZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gaming-red transition duration-200"
                >
                  <Discord className="mr-2" size={18} />
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://m.youtube.com/@ACSVPROGAMING" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gaming-red transition duration-200"
                >
                  <Youtube className="mr-2" size={18} />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@acsv_progaming" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gaming-red transition duration-200"
                >
                  <ExternalLink className="mr-2" size={18} />
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center hover:text-gaming-red transition duration-200"
                >
                  <ExternalLink className="mr-2" size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center hover:text-gaming-red transition duration-200"
                >
                  <ExternalLink className="mr-2" size={18} />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gaming-red">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gaming-light-gray">Email:</span>
                <a href="mailto:info@acsv.com" className="ml-2 hover:text-gaming-red transition duration-200">info@acsv.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-gaming-light-gray">Support:</span>
                <a href="mailto:support@acsv.com" className="ml-2 hover:text-gaming-red transition duration-200">support@acsv.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gaming-gray mt-8 pt-8 text-center text-sm text-gaming-light-gray">
          <p>&copy; {new Date().getFullYear()} ACSV - Association Camerounaise des Sports Virtuels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

