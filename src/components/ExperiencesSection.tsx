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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-trove-gold mb-6 tracking-wide">
            UPCOMING EXPERIENCES
          </h2>
        </div>
        
        {/* City Icons - Similar to Trove */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0v-4a1 1 0 011-1h4a1 1 0 011 1v4" />
              </svg>
            </div>
            <p className="text-sm font-light">SRT</p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-light text-gray-900 mb-2">The Slackline Journey</h3>
                <p className="text-sm text-gray-600 mb-4">Master the Art of Dynamic Balance</p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>Next on Sat, 25th Jan.</p>
                  <p>Surat</p>
                  <p>₹2,500 for one participant</p>
                </div>
                <div className="text-xs text-gray-400 mb-4">Coming Soon</div>
                <div className="text-lg font-light text-gray-900">₹2,500.00</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-light text-gray-900 mb-2">Mindful Canvas</h3>
                <p className="text-sm text-gray-600 mb-4">Art Therapy & Creative Expression</p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>Next on Sun, 26th Jan.</p>
                  <p>Surat</p>
                  <p>₹3,200 for one participant</p>
                </div>
                <div className="text-xs text-gray-400 mb-4">Coming Soon</div>
                <div className="text-lg font-light text-gray-900">₹3,200.00</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-light text-gray-900 mb-2">Inner Stillness</h3>
                <p className="text-sm text-gray-600 mb-4">Meditation & Mindfulness Practice</p>
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p>Next on Fri, 24th Jan.</p>
                  <p>Surat</p>
                  <p>₹1,800 for one participant</p>
                </div>
                <div className="text-xs text-gray-400 mb-4">Coming Soon</div>
                <div className="text-lg font-light text-gray-900">₹1,800.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;