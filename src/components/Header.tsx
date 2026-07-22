
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-2xl text-gray-900">
            F1APM
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('podcast')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Podcast
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Newsletter
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
              <a 
                href="https://www.linkedin.com/in/shauryasethi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/shauryaset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('podcast')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Podcast
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Newsletter
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
              <a 
                href="https://www.linkedin.com/in/shauryasethi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/shauryaset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
