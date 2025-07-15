import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-sage/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Join the <span className="text-sage">Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your balance? Connect with us and take the first step 
            towards a more mindful, balanced life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-lg animate-fade-in border-sage/20" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-serif text-foreground">
                Register for Workshop
              </CardTitle>
              <p className="text-muted-foreground">
                Secure your spot in Surat's first slacklining experience
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sage font-medium">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="mt-2 border-sage/30 focus:border-sage"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sage font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Your phone number" 
                      className="mt-2 border-sage/30 focus:border-sage"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sage font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="mt-2 border-sage/30 focus:border-sage"
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience" className="text-sage font-medium">Experience Level</Label>
                  <Input 
                    id="experience" 
                    placeholder="Beginner, Intermediate, or Advanced" 
                    className="mt-2 border-sage/30 focus:border-sage"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sage font-medium">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your goals or any questions you have..." 
                    className="mt-2 border-sage/30 focus:border-sage resize-none"
                    rows={4}
                  />
                </div>
                
                <Button variant="meditation" size="lg" className="w-full font-medium">
                  Register Now
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Get in Touch */}
            <Card className="p-6 shadow-lg animate-fade-in border-sage/20" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">@balancecommune</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-earth/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-earth" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Quick questions & updates</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@balancecommune.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Instagram CTA */}
            <Card className="p-6 shadow-lg animate-fade-in border-sage/20" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-foreground">
                  Follow Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest workshops, tips, and community highlights. 
                  Share your own balance journey with us!
                </p>
                <Button variant="sage" size="lg" className="w-full font-medium">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow @balancecommune
                </Button>
              </CardContent>
            </Card>
            
            {/* Workshop Details */}
            <Card className="p-6 shadow-lg animate-fade-in border-sage/20" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-foreground">
                  Workshop Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">3 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Group Size:</span>
                  <span className="font-medium text-foreground">Max 15 people</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Level:</span>
                  <span className="font-medium text-foreground">All welcome</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Investment:</span>
                  <span className="font-medium text-sage">Contact for pricing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;