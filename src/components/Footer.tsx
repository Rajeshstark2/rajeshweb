import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'AI Chatbots',
    'UI/UX Design',
    'E-Commerce',
    'Security Auditing',
  ];

  return (
    <footer className="bg-cyber-dark/80 backdrop-blur-lg border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-orbitron font-bold glow-text">
                Rajesh
              </div>
            </div>
            <p className="text-soft-gray text-sm leading-relaxed">
              AI Developer, Ethical Hacker, and Digital Creator passionate about 
              building the future with code and creativity.
            </p>
            <div className="text-xs text-cyber-aqua">
              Founder @ StarkCloudie
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-semibold text-cyber-aqua">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-soft-gray hover:text-cyber-aqua transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-semibold text-neon-pink">
              Services
            </h4>
            <div className="space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-soft-gray text-sm hover:text-neon-pink transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-semibold text-cyber-aqua">
              Stay Updated
            </h4>
            <p className="text-soft-gray text-sm">
              Get notified about new projects and tech insights.
            </p>
            <form action="https://formspree.io/f/mgvarvgl" method="POST" className="flex flex-col space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-soft-gray text-sm focus:border-cyber-aqua focus:outline-none transition-colors"
              />
              <input type="hidden" name="subject" value="Newsletter Subscription" />
              <button type="submit" className="cyber-button text-sm py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { name: 'GitHub', icon: 'G' },
            { name: 'YouTube', icon: 'Y' },
            { name: 'Instagram', icon: 'I' },
            { name: 'LinkedIn', icon: 'L' },
            { name: 'WhatsApp', icon: 'W' },
          ].map((social, index) => (
            <div
              key={social.name}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:neon-border cursor-pointer transition-all duration-300 hover:scale-110 floating-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-cyber-aqua font-bold">{social.icon}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-soft-gray text-sm">
              © {currentYear} Rajesh • All rights reserved
            </div>
            <div className="text-soft-gray text-sm">
              Crafted with ❤️ and lots of ☕ by{' '}
              <span className="text-cyber-aqua">Rajesh</span>
            </div>
          </div>
        </div>

        {/* Hidden easter egg trigger */}
        <div className="text-center mt-8">
          <div className="text-xs text-soft-gray/30 cursor-pointer hover:text-cyber-aqua transition-colors">
            Press Ctrl+Shift+H for something special... 🚀
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
