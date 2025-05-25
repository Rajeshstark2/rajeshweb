import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    { label: 'Email', value: 'rajesh.devcoder@gmail.com', type: 'email' },
    { label: 'WhatsApp', value: '+91 9360161578', type: 'phone' },
    { label: 'Location', value: 'India', type: 'location' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Rajeshstark2', icon: 'G' },
    { name: 'YouTube', url: 'https://youtube.com/@codehackerss', icon: 'Y' },
    { name: 'Instagram', url: 'https://instagram.com/coding_rajesh', icon: 'I' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rajesh-k-5583752a5', icon: 'L' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">
              Send a Message
            </h3>
            
            <form action="https://formspree.io/f/mgvarvgl" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-soft-gray text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-soft-gray text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-soft-gray text-sm">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="cyber-button w-full text-lg py-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-border">
                      <span className="text-cyber-aqua font-bold">{info.label[0]}</span>
                    </div>
                    <div>
                      <div className="text-soft-gray text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-neon-pink mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 glass-card rounded-lg hover:neon-border transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-10 h-10 bg-cyber-gradient rounded-full flex items-center justify-center">
                      <span className="text-cyber-dark font-bold">{social.icon}</span>
                    </div>
                    <span className="text-white group-hover:text-cyber-aqua transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <Button 
                  className="cyber-button w-full text-lg py-4"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark w-full text-lg py-4"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Rajesh_CV.pdf';
                    link.download = 'Rajesh_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-cyber-dark w-full text-lg py-4"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
