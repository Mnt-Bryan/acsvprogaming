
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TranslateToggle from "../common/TranslateToggle";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <TranslateToggle />
    </div>
  );
};

export default MainLayout;
