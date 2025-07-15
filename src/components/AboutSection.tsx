const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-on-scroll">
            <h2 className="text-4xl font-light text-charcoal mb-6">
              About The Balance Commune
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We create transformative experiences through mindful movement, artistic expression, 
              and holistic wellness practices.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl font-light text-charcoal mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Balance Commune is more than a wellness platform—it's a community dedicated to 
              holistic growth. We believe in the power of mindful movement and creative expression 
              to transform lives, build inner strength, and create lasting balance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From slacklining workshops to meditation sessions, art therapy to sound healing, 
              each experience is designed to help you find equilibrium between body, mind, and spirit.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 mx-auto mb-4 border border-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
              </div>
              <h4 className="text-lg font-normal text-charcoal mb-2">Curated Quality</h4>
              <p className="text-sm text-muted-foreground">
                Every experience is handpicked for authenticity and excellence
              </p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 mx-auto mb-4 border border-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
              </div>
              <h4 className="text-lg font-normal text-charcoal mb-2">Local Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Connect with passionate experts who share their craft
              </p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 mx-auto mb-4 border border-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
              </div>
              <h4 className="text-lg font-normal text-charcoal mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">
                Join a community of curious minds and creative souls
              </p>
            </div>
          </div>
          
          {/* Founder's Story */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-light text-charcoal mb-8 text-center animate-on-scroll">🌿 Founder Story: Arushi – The Journey Behind Balance Commune</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 animate-on-scroll-left" style={{animationDelay: '0.2s'}}>
                <p className="text-lg font-light text-charcoal italic">
                  I didn't set out to build a community.<br />
                  I was simply searching for balance.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Like many of us, I found myself pulled in different directions—doing work that looked impressive 
                  from the outside but left me feeling scattered inside. Productivity without presence. Movement without meaning.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  It was only when I paused—through yoga, quiet walks, and creative expression—that I began to hear 
                  myself again. Not just the loud thoughts, but the soft, truthful ones underneath. That's when the 
                  idea began to grow… not of a company, but of a commune.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  A space.<br />
                  A gathering.<br />
                  Where people could come as they are.<br />
                  Not to escape life, but to meet it more fully.
                </p>
                
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Balance Commune was born from that vision.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  A space for young Indians who are building their lives, navigating modern chaos, yet craving grounding. 
                  Through movement, art, shared experiences, and honest conversations—we explore what balance really means. 
                  Not as a fixed state, but as something we learn to return to. Together.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  This isn't about being perfect or peaceful all the time.<br />
                  It's about showing up.<br />
                  Wobbling, laughing, expressing, connecting.<br />
                  And finding our way back to ourselves.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm Arushi, and this is my invitation:<br />
                  Let's co-create a new kind of community.<br />
                  One where we grow not alone, but in balance—with ourselves, each other, and the world around us.
                </p>
              </div>
              <div className="flex justify-center animate-on-scroll-right" style={{animationDelay: '0.4s'}}>
                <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src="/arushi.jpg" 
                    alt="Arushi Sharma - Founder of The Balance Commune" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="text-sm font-normal text-charcoal hover:text-accent transition-colors border-b border-charcoal hover:border-accent pb-1">
              Join our journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;