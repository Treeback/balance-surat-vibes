import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white">
            <h1 className="text-2xl font-light tracking-wider">
              BALANCE
              <span className="block text-sm tracking-widest">COMMUNE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              Upcoming Experiences
            </a>
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              All Experiences
            </a>
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              For Groups
            </a>
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              Gifting
            </a>
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              About Balance
            </a>
            <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-trove-gold text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                Upcoming Experiences
              </a>
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                All Experiences
              </a>
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                For Groups
              </a>
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                Gifting
              </a>
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                About Balance
              </a>
              <a href="#" className="text-white font-light hover:text-trove-gold transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;