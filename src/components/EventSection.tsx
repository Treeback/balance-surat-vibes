import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const EventSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Surat's First <span className="text-sage">Slacklining</span> Workshop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an unforgettable evening of balance, mindfulness, and community growth. 
            No experience required—just bring your curiosity and willingness to learn.
          </p>
        </div>
        
        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-8 h-8 text-sage" />
              </div>
              <CardTitle className="text-lg text-sage">Date</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Next Saturday</p>
              <p className="text-sm text-muted-foreground">Perfect weekend start</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-8 h-8 text-earth" />
              </div>
              <CardTitle className="text-lg text-earth">Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Evening Session</p>
              <p className="text-sm text-muted-foreground">Golden hour vibes</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-lg text-accent">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Surat</p>
              <p className="text-sm text-muted-foreground">Peaceful outdoor setting</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-sage/20" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-sage" />
              </div>
              <CardTitle className="text-lg text-sage">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Limited Spots</p>
              <p className="text-sm text-muted-foreground">Intimate group setting</p>
            </CardContent>
          </Card>
        </div>
        
        {/* What to Expect */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg animate-fade-in border-sage/20" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-serif text-foreground mb-4">
                What to Expect
              </CardTitle>
              <p className="text-muted-foreground">
                A transformative experience combining physical challenge with spiritual growth
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-sage mb-4">Workshop Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Introduction to slacklining basics and safety</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Mindful movement and meditation techniques</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Progressive exercises for balance and focus</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Community building and shared experiences</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-earth mb-4">What to Bring</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Comfortable athletic clothing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Water bottle and positive mindset</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Willingness to step out of your comfort zone</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Open mind for new experiences</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-sage/20">
                <p className="text-muted-foreground mb-4">
                  <strong className="text-sage">All skill levels welcome!</strong> Our experienced guides will help you find your balance.
                </p>
                <Button variant="meditation" size="lg" className="font-medium">
                  Reserve Your Spot
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventSection;