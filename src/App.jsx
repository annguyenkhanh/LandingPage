import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
