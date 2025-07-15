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
            Our <span className="text-terracotta">Experiences</span>
          </h2>
          <p className="text-xl text-earth max-w-3xl mx-auto leading-relaxed">
            Carefully curated experiences designed to nurture your mind, body, and spirit. 
            Each journey is a step towards finding your inner balance and connecting with like-minded souls.
          </p>
        </div>
        
        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-sage/20 group cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <CardHeader className="relative z-10 pb-3 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <experience.icon className="w-8 h-8 text-sage" />
                </div>
                <CardTitle className="text-2xl font-serif text-sage mb-2">
                  {experience.title}
                </CardTitle>
                <p className="text-sm text-earth/70 font-medium">{experience.subtitle}</p>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-charcoal/80 mb-4 leading-relaxed">{experience.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage/10 text-sage border border-sage/20">
                  {experience.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Experience - Slacklining Details */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-xl animate-fade-in border-sage/20" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-sage/5 to-terracotta/5 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">
                  Featured Experience: <span className="text-sage">Slacklining</span>
                </h3>
                <p className="text-xl text-earth max-w-2xl mx-auto">
                  Join Surat's first slacklining workshop - where balance meets mindfulness
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Calendar className="w-8 h-8 text-sage mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-sage mb-1">Date</h4>
                  <p className="text-sm text-charcoal">Next Saturday</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Clock className="w-8 h-8 text-earth mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-earth mb-1">Time</h4>
                  <p className="text-sm text-charcoal">Evening Session</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <MapPin className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-terracotta mb-1">Location</h4>
                  <p className="text-sm text-charcoal">Surat</p>
                </div>
                <div className="text-center p-4 bg-cream/50 rounded-lg">
                  <Users className="w-8 h-8 text-sage mx-auto mb-2" />
                  <h4 className="font-serif font-semibold text-sage mb-1">Community</h4>
                  <p className="text-sm text-charcoal">Limited Spots</p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-sage mb-4">Workshop Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Introduction to slacklining basics and safety</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Mindful movement and meditation techniques</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Progressive exercises for balance and focus</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-terracotta mb-4">What to Bring</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Comfortable athletic clothing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Water bottle and positive mindset</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-earth">Willingness to step out of your comfort zone</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-sage/20">
                <p className="text-earth mb-4">
                  <strong className="text-sage">All skill levels welcome!</strong> Our experienced guides will help you find your balance.
                </p>
                <Button variant="commune" size="lg" className="font-medium">
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;