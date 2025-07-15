import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperiencesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
