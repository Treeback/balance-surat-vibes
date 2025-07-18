import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="The Balance Commune" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-normal tracking-wider text-charcoal">
              THE BALANCE COMMUNE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              Upcoming Experiences
            </a>
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              All Experiences
            </a>
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              For Groups
            </a>
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              Gifting
            </a>
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="#" className="text-charcoal font-normal text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-gray-100 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-charcoal hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                Upcoming Experiences
              </a>
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                All Experiences
              </a>
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                For Groups
              </a>
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                Gifting
              </a>
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                About
              </a>
              <a href="#" className="text-charcoal font-normal hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;