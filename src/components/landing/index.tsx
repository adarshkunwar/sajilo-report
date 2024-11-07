import Navbar from "./navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./pricing";
import Testimonials from "./testimonials";
import Footer from "./footer";
import ContactSection from "./Contact";

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
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
