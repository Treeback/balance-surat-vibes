import { Button } from "@/components/ui/button";
import slacklineHero from "@/assets/slackline-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-white via-muted/50 to-sage/10 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-earth/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Find Your
            <span className="text-sage block">Balance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Join <span className="text-sage font-medium">Balance Commune</span> for Surat's first slacklining workshop. 
            Experience the perfect blend of physical challenge, mental focus, and spiritual growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="meditation" size="lg" className="font-medium">
              Join the Workshop
            </Button>
            <Button variant="zen" size="lg" className="font-medium">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-sage/20">
            <p className="text-sm text-muted-foreground mb-2">Next Saturday Evening</p>
            <p className="text-sage font-medium">Surat's First Slacklining Experience</p>
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10">
            <img 
              src={slacklineHero} 
              alt="Balance and mindfulness illustration" 
              className="w-full max-w-md mx-auto animate-float"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-sage/20 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-earth/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-sage/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;