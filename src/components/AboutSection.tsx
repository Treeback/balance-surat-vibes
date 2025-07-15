import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import meditationBalance from "@/assets/meditation-balance.png";
import mountainsBalance from "@/assets/mountains-balance.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            The <span className="text-sage">Balance Commune</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A community dedicated to holistic growth through mindful movement, 
            bringing together physical challenge, mental clarity, and spiritual awakening.
          </p>
        </div>
        
        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-4">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-sage/20 rounded-full"></div>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-sage">Physical</h3>
              <p className="text-sm text-muted-foreground">
                Develop core strength, balance, and body awareness through mindful movement
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-4">
              <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-earth/20 rounded-full"></div>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-earth">Mental</h3>
              <p className="text-sm text-muted-foreground">
                Cultivate focus, presence, and mental resilience through concentrated practice
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.3s' }}>
            <CardContent className="pt-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-accent">Emotional</h3>
              <p className="text-sm text-muted-foreground">
                Build confidence, overcome fears, and develop emotional balance
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-4">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-sage/20 rounded-full"></div>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-sage">Spiritual</h3>
              <p className="text-sm text-muted-foreground">
                Connect with your inner self and find peace through meditative movement
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
              Why Slacklining?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Slacklining is more than just balancing on a line—it's a meditative practice that 
              teaches us to find stability in motion, peace in challenge, and growth in every step.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-sage">Mindful Movement:</strong> Each step requires complete presence and awareness
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-earth">Inner Balance:</strong> Physical balance mirrors mental and emotional stability
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-accent">Community Growth:</strong> Learn and grow together in a supportive environment
                </p>
              </div>
            </div>
            
            <Button variant="sage" size="lg" className="font-medium">
              Join Our Community
            </Button>
          </div>
          
          {/* Right - Images */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <img 
                src={meditationBalance} 
                alt="Meditation and balance" 
                className="w-full max-w-sm mx-auto animate-float"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 opacity-50">
                <img 
                  src={mountainsBalance} 
                  alt="Mountains representing balance" 
                  className="w-full h-full object-contain animate-float" 
                  style={{ animationDelay: '1s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;