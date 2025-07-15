import { Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8 animate-on-scroll">
          {/* Connect */}
          <h4 className="text-lg font-normal mb-4">Connect with us</h4>
          <div className="flex justify-center mb-4">
            <a href="https://instagram.com/thebalancecommune" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-white/70">
            hello@balancecommune.com
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-sm text-white/50">
              © 2024 The Balance Commune. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;