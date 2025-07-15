import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Check } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const ExperienceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // For now, we'll hardcode the slackline experience data
  // In a real app, this would be fetched based on the ID
  const experience = {
    title: "The Slackline Journey",
    subtitle: "Master the Art of Dynamic Balance",
    category: "Balance & Movement",
    location: "Surat",
    date: "Saturday, 25th January 2025",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    price: "₹300",
    originalPrice: "₹600",
    priceNote: "Early Bird Price - First 6 Participants",
    maxParticipants: 15,
    spotsLeft: 8,
    image: "/slackline.jpg",
    description: `Embark on a transformative journey where physical balance becomes a gateway to mental clarity and spiritual growth. 
    
    Our Slackline Journey workshop is Surat's first comprehensive introduction to the art of slacklining—a practice that challenges your body while calming your mind.`,
    whatYoullLearn: [
      "Basic slackline setup and safety protocols",
      "Fundamental balance techniques and body positioning",
      "Breathing exercises to enhance focus and stability",
      "Progressive walking techniques from beginner to intermediate",
      "Mental strategies for overcoming fear and building confidence",
      "Integration of mindfulness practices with movement"
    ],
    whatToExpect: [
      "Professional instruction from certified slackline coaches",
      "All equipment provided (slacklines, safety gear, mats)",
      "Small group setting for personalized attention",
      "Progressive difficulty levels to match your comfort",
      "Supportive community environment",
      "Post-session integration circle and tea ceremony"
    ],
    whoIsItFor: [
      "Complete beginners curious about slacklining",
      "Fitness enthusiasts looking for a new challenge",
      "Yoga practitioners wanting to deepen their balance practice",
      "Anyone seeking a unique mind-body experience",
      "Adventure seekers and outdoor enthusiasts"
    ],
    includes: [
      "3-hour guided workshop",
      "All slackline equipment and safety gear",
      "Healthy refreshments and herbal tea",
      "Digital guide for continued practice",
      "Access to Balance Commune community"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-charcoal hover:text-accent"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-100">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <p className="text-white/80 text-sm uppercase tracking-wider mb-2">{experience.category}</p>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-2">{experience.title}</h1>
            <p className="text-xl text-white/90">{experience.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-light text-charcoal mb-4">About This Experience</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-light text-charcoal mb-6">What You'll Learn</h2>
                <ul className="space-y-3">
                  {experience.whatYoullLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-2xl font-light text-charcoal mb-6">What to Expect</h2>
                <ul className="space-y-3">
                  {experience.whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Is It For */}
              <div>
                <h2 className="text-2xl font-light text-charcoal mb-6">Who Is This For?</h2>
                <ul className="space-y-3">
                  {experience.whoIsItFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground/30 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gray-50 rounded-lg p-6 space-y-6">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-light text-charcoal">{experience.price}</p>
                    <p className="text-lg text-muted-foreground line-through">{experience.originalPrice}</p>
                  </div>
                  <p className="text-sm text-accent font-medium">{experience.priceNote}</p>
                  <p className="text-xs text-muted-foreground mt-1">Regular price ₹600 after first 6 spots</p>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{experience.date}</p>
                      <p className="text-xs text-muted-foreground">{experience.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{experience.duration}</p>
                      <p className="text-xs text-muted-foreground">Workshop duration</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{experience.location}</p>
                      <p className="text-xs text-muted-foreground">Exact location shared after booking</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{experience.spotsLeft} spots left</p>
                      <p className="text-xs text-muted-foreground">Out of {experience.maxParticipants} total</p>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <p className="text-sm font-medium text-charcoal mb-3">What's Included</p>
                  <ul className="space-y-2">
                    {experience.includes.map((item, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-white"
                  onClick={() => {
                    const element = document.querySelector('footer');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Reserve Your Spot
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <ContactSection />
    </div>
  );
};

export default ExperienceDetail;