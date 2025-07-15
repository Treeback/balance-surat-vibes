import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/d4a136f2-157c-4e29-8498-a1805728b829.png" 
          alt="Balance Commune - Stacked stones representing balance and harmony" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-light text-charcoal mb-8 leading-tight tracking-wide">
            Find Fresh Sources of Joy
          </h1>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charcoal/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;