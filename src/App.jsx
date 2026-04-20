import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Stats from "./components/Stats";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <Brands />
      <Stats />
      <Features />
      <DashboardPreview />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <Analytics />
    </div>
  );
}
