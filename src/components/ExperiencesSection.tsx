import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar, Zap, Palette, Brain } from "lucide-react";

const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Slacklining",
      subtitle: "Balance & Flow",
      description: "Master the art of balance on our first-ever slacklining workshop in Surat",
      status: "Coming Soon",
      icon: Zap,
      color: "sage",
      gradient: "from-sage to-sage-light"
    },
    {
      title: "Art Therapy",
      subtitle: "Creative Expression", 
      description: "Paint your emotions and discover inner peace through guided artistic exploration",
      status: "Early 2025",
      icon: Palette,
      color: "terracotta",
      gradient: "from-terracotta to-terracotta-light"
    },
    {
      title: "Meditation",
      subtitle: "Mindful Presence",
      description: "Group meditation sessions in nature's embrace for deep inner connection",
      status: "Planning",
      icon: Brain,
      color: "earth",
      gradient: "from-earth to-earth-light"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-warm-beige/30 to-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Curated <span className="text-terracotta">Experiences</span>
          </h2>
          <p className="text-xl text-earth max-w-3xl mx-auto leading-relaxed">
            Thoughtfully crafted journeys that awaken your senses, challenge your limits, and nurture your soul. Each experience is a gateway to discovering new dimensions of yourself.
          </p>
        </div>
        
        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* The Slackline Journey */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-sage/20 hover:border-sage/40 bg-cream/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sage to-earth rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">The Slackline Journey</h3>
                <p className="text-earth mb-6 leading-relaxed">
                  Dance between earth and sky. Master the art of dynamic balance while discovering the profound meditation that emerges from focused movement.
                </p>
                <div className="space-y-2 text-sm text-earth/80 mb-4">
                  <p><span className="font-medium text-sage">Next on:</span> Sat, 25th Jan</p>
                  <p><span className="font-medium text-sage">Duration:</span> 2 hours</p>
                  <p><span className="font-medium text-sage">Group Size:</span> 4-8 participants</p>
                  <p><span className="font-medium text-sage">Investment:</span> ₹2,500 for one participant</p>
                </div>
                <div className="text-xs text-sage/60 mb-4 font-medium">Coming Soon</div>
                <Button variant="commune" className="w-full">
                  ₹2,500.00
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mindful Canvas */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-terracotta/20 hover:border-terracotta/40 bg-warm-beige/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-earth rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Mindful Canvas</h3>
                <p className="text-earth mb-6 leading-relaxed">
                  Unlock your creative spirit through guided art therapy. Let intuitive colors and organic textures become your personal language of healing and self-discovery.
                </p>
                <div className="space-y-2 text-sm text-earth/80 mb-4">
                  <p><span className="font-medium text-terracotta">Next on:</span> Sun, 26th Jan</p>
                  <p><span className="font-medium text-terracotta">Duration:</span> 3 hours</p>
                  <p><span className="font-medium text-terracotta">Group Size:</span> 6-10 participants</p>
                  <p><span className="font-medium text-terracotta">Investment:</span> ₹3,200 for one participant</p>
                </div>
                <div className="text-xs text-terracotta/60 mb-4 font-medium">Coming Soon</div>
                <Button variant="zen" className="w-full">
                  ₹3,200.00
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inner Stillness */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-sage/20 hover:border-sage/40 bg-cream/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sage to-terracotta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Inner Stillness</h3>
                <p className="text-earth mb-6 leading-relaxed">
                  Dive deep into the sanctuary of your own awareness. Discover profound peace through ancient mindfulness practices adapted for modern souls seeking authentic connection.
                </p>
                <div className="space-y-2 text-sm text-earth/80 mb-4">
                  <p><span className="font-medium text-sage">Next on:</span> Fri, 24th Jan</p>
                  <p><span className="font-medium text-sage">Duration:</span> 1.5 hours</p>
                  <p><span className="font-medium text-sage">Group Size:</span> 8-12 participants</p>
                  <p><span className="font-medium text-sage">Investment:</span> ₹1,800 for one participant</p>
                </div>
                <div className="text-xs text-sage/60 mb-4 font-medium">Coming Soon</div>
                <Button variant="commune" className="w-full">
                  ₹1,800.00
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Experience - Slacklining Details */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-xl animate-fade-in border-sage/20" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-sage/5 to-terracotta/5 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">
                  Experience Spotlight: <span className="text-sage">The Slackline Journey</span>
                </h3>
                <p className="text-xl text-earth max-w-2xl mx-auto">
                  Surat's pioneering balance experience - where movement becomes meditation and challenge transforms into joy
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Calendar className="w-8 h-8 text-sage mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-sage mb-1">Next Session</h4>
                  <p className="text-sm text-charcoal">Sat, 25th Jan</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Clock className="w-8 h-8 text-earth mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-earth mb-1">Duration</h4>
                  <p className="text-sm text-charcoal">2 Hours</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <MapPin className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-terracotta mb-1">Location</h4>
                  <p className="text-sm text-charcoal">Surat</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Users className="w-8 h-8 text-sage mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-sage mb-1">Group Size</h4>
                  <p className="text-sm text-charcoal">4-8 Participants</p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-sage mb-4">Journey Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Foundation techniques and mindful safety practices</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Dynamic balance exercises that challenge and inspire</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Meditation-in-motion techniques for presence and flow</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-terracotta mb-4">What to Bring</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Comfortable movement-friendly clothing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Water bottle and open heart</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Courage to embrace the beautiful challenge</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-sage/20">
                <p className="text-earth mb-4">
                  <strong className="text-sage">Every level welcomed!</strong> Our experienced guides create a supportive space for your unique journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-2xl font-bold text-sage">₹2,500 for one participant</div>
                  <Button variant="commune" size="lg" className="font-medium">
                    Reserve Your Journey
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;