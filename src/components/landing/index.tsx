import { ArrowRight, BarChart2, Clock, FileText, Check } from "lucide-react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./pricing";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="b">
        <Navbar />
        <Hero />
      </header>

      {/* Features Section */}
      <Features />
      <Pricing />
    </div>
  );
};

export default LandingPage;
