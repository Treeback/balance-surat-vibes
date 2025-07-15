import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExperiencesSection = () => {
  const navigate = useNavigate();
  
  const experiences = [
    {
      id: 1,
      title: "The Slackline Journey",
      category: "Balance & Movement",
      location: "Surat",
      date: "Sat, 25th Jan",
      price: "₹300",
      originalPrice: "₹600",
      priceNote: "Early Bird (First 6 spots)",
      image: "/slackline.jpg",
      duration: "3 hours",
      availability: "Limited Spots"
    },
    {
      id: 2,
      title: "Human Library",
      category: "Stories & Connection",
      location: "Surat",
      date: "Coming Soon",
      price: "₹1,500",
      image: "/humanlibrary.avif",
      duration: "2.5 hours",
      availability: "Coming Soon"
    },
    {
      id: 3,
      title: "Forest Bathing",
      category: "Nature & Wellness",
      location: "Surat",
      date: "Coming Soon",
      price: "₹2,000",
      image: "/forestbathing.webp",
      duration: "4 hours",
      availability: "Coming Soon"
    },
    {
      id: 4,
      title: "Feminine Circle",
      category: "Women's Wellness",
      location: "Surat",
      date: "Coming Soon",
      price: "₹1,800",
      image: "/femininecircle.jpg",
      duration: "3 hours",
      availability: "Coming Soon"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <h2 className="text-3xl font-light text-charcoal mb-2">
            Upcoming Experiences
          </h2>
          <p className="text-muted-foreground">
            Discover transformative experiences in your city
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id} 
              className={`group overflow-hidden border-0 shadow-sm transition-all duration-300 ${experience.id === 1 ? 'cursor-pointer hover:shadow-md' : 'opacity-75'} animate-on-scroll`}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              onClick={() => experience.id === 1 && navigate('/experience/slackline-journey')}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {experience.availability === "Coming Soon" && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-lg font-light px-4 py-2 border border-white rounded">
                      Coming Soon
                    </span>
                  </div>
                )}
                {/* City Badge */}
                <div className="absolute -top-1 -right-1 bg-[#DDA62E] text-[#040403] px-6 py-2 rounded-bl-2xl text-sm font-light shadow-md flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {experience.location}
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-4">
                <div className="space-y-2">
                  {/* Category */}
                  <p className="text-xs font-medium text-accent uppercase tracking-wider">
                    {experience.category}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-lg font-normal text-charcoal">
                    {experience.title}
                  </h3>
                  
                  {/* Location and Date */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{experience.date}</span>
                    </div>
                  </div>
                  
                  {/* Price and Availability */}
                  <div className="flex items-center justify-between pt-2">
                    {experience.availability !== "Coming Soon" ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <p className="text-lg font-normal text-charcoal">
                            {experience.price}
                          </p>
                          {experience.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {experience.originalPrice}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {experience.priceNote || "per person"}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Details coming soon
                        </p>
                      </div>
                    )}
                    <p className="text-xs text-accent">
                      {experience.availability}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="text-sm font-normal text-charcoal hover:text-accent transition-colors border-b border-charcoal hover:border-accent pb-1">
            View all experiences
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ExperiencesSection;