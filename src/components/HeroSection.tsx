import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedLogoWrapper from "./AnimatedLogoWrapper";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [showStrike, setShowStrike] = useState(false);
  const words = ["Transform", "Change"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWord === 0) {
        // Currently showing "Transform", switch to "Change"
        setCurrentWord(1);
        // Show strike after a delay
        setTimeout(() => setShowStrike(true), 300);
      } else {
        // Currently showing "Change", hide strike first, then switch to "Transform"
        setShowStrike(false);
        setTimeout(() => setCurrentWord(0), 200);
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, [currentWord]);
  
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Hero Text */}
          <div className="order-1 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-5xl lg:text-6xl font-medium text-charcoal mb-6 leading-tight animate-on-scroll">
              Find Your Balance,<br />
              <span className="relative inline-flex w-[200px] lg:w-[280px] justify-center items-end" style={{ verticalAlign: 'bottom', height: '1em' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.3
                    }}
                    className={`inline-block ${currentWord === 0 ? 'text-[#d38d50] font-[Kalam] font-normal' : 'text-accent font-light'}`}
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
                  
                  {/* Strikethrough line animation - controlled by separate state */}
                  <AnimatePresence>
                    {showStrike && (
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.2
                        }}
                      >
                        <motion.svg
                          width="260"
                          height="20"
                          viewBox="0 0 260 20"
                          style={{ overflow: 'visible' }}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: currentWord === 1 ? 1 : 0,
                            opacity: currentWord === 1 ? 1 : 0
                          }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.path
                            d="M 0,10 Q 30,8 60,10 T 120,9 Q 150,11 180,9 T 240,10 L 260,10"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className="text-red-500"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: currentWord === 1 ? 1 : 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.path
                            d="M 5,12 Q 35,11 65,12 T 125,11 Q 155,13 185,11 T 245,12 L 255,12"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-red-500"
                            opacity="0.6"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: currentWord === 1 ? 1 : 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.05,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </span><br className="sm:hidden" /> Your Life
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
            <AnimatedLogoWrapper 
              className="w-full max-w-xl lg:max-w-3xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;