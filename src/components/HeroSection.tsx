import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Hero Text */}
          <div className="order-1 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-5xl lg:text-6xl font-medium text-charcoal mb-6 leading-tight animate-on-scroll">
              Find Your Balance,<br />
              <span className="text-accent">Transform</span> Your Life
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-on-scroll" style={{animationDelay: '0.2s'}}>
              We curate transformative experiences that harmonize body, mind, and spirit. 
              Discover balance through conscious movement, creative expression, and community connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-charcoal hover:bg-charcoal/90 text-white"
                onClick={() => {
                  const element = document.getElementById('experiences');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Experiences
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                onClick={() => {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Philosophy
              </Button>
            </div>
            <div className="hidden lg:block mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-2 text-center lg:text-left">UPCOMING EXPERIENCE</p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <p className="text-lg font-normal text-charcoal">
                  Slackline Journey • 25th Jan • <span className="text-accent font-medium">₹300</span> <span className="text-sm line-through text-muted-foreground">₹600</span>
                </p>
                <Button 
                  size="sm" 
                  variant="link" 
                  className="text-accent hover:text-accent/80 p-0"
                  onClick={() => navigate('/experience/slackline-journey')}
                >
                  View Details →
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Logo */}
          <div className="order-2 lg:order-2 flex items-center justify-center animate-on-scroll-scale" style={{animationDelay: '0.6s'}}>
            <img 
              src="/logo.svg" 
              alt="The Balance Commune Logo" 
              className="w-full max-w-lg lg:max-w-2xl h-auto animate-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;