import Navbar from "../../components/shared/Navbar";
import Features from "./Features";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import About from "./About";
import CTA from "./CTA";
import Faqs from "./Faqs";
import Footer from "../../components/shared/Footer";
import { useEffect } from "react";
import api from "../../api/axios";

const LandingPage = () => {
  useEffect(() => {
    api.get("/auth/get-me").catch(() => {});
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Aurora Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-secondary/10 blur-[100px] rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <About />
        <Faqs />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
