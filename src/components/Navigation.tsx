import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-lg py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="relative">
              <div className="text-2xl font-orbitron font-bold glow-text animate-glow">
                Rajesh
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-aqua rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-cyber-aqua">StarkCloudie</div>
              <div className="text-xs text-soft-gray">AI Developer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-soft-gray hover:text-cyber-aqua transition-all duration-300 relative group ${
                  activeSection === item.href.substring(1) ? 'text-cyber-aqua' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-gradient transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark transition-all duration-300"
              onClick={() => scrollToSection('#booking')}
            >
              Book Now
            </Button>
            <Button 
              className="cyber-button"
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden neon-border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span className={`w-4 h-0.5 bg-cyber-aqua block transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-cyber-aqua block transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-cyber-aqua block transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-6 rounded-lg animate-fade-in border border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-soft-gray hover:text-cyber-aqua transition-colors duration-300 py-2 ${
                    activeSection === item.href.substring(1) ? 'text-cyber-aqua' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                <Button 
                  variant="outline" 
                  className="neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark"
                  onClick={() => scrollToSection('#booking')}
                >
                  Book Now
                </Button>
                <Button 
                  className="cyber-button"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
