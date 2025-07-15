import { Button } from "@/components/ui/button";
import slacklineHero from "@/assets/slackline-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <img 
          src={slacklineHero} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-wide">
            Find Fresh Sources of Joy
          </h1>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;