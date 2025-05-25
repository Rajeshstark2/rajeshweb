
import React from 'react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'AI Development & Training',
      description: 'Custom AI solutions, chatbots, and prompt engineering for businesses',
      features: ['Custom AI Chatbots', 'Prompt Engineering', 'AI API Integration', 'Training & Consultation'],
      pricing: 'Starting from ₹15,000',
      duration: '2-4 weeks',
      icon: '🤖',
      color: 'cyber-aqua'
    },
    {
      title: 'Full Stack Web Development',
      description: 'Modern, responsive websites and web applications using latest technologies',
      features: ['React/Next.js Apps', 'MongoDB Integration', 'Firebase Backend', 'Responsive Design'],
      pricing: 'Starting from ₹25,000',
      duration: '3-6 weeks',
      icon: '💻',
      color: 'neon-pink'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment integration and admin panels',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      pricing: 'Starting from ₹35,000',
      duration: '4-8 weeks',
      icon: '🛒',
      color: 'cyber-aqua'
    },
    {
      title: 'UI/UX Design',
      description: 'Modern, user-friendly interfaces that convert visitors into customers',
      features: ['Figma Design', 'Prototyping', 'User Research', 'Design Systems'],
      pricing: 'Starting from ₹12,000',
      duration: '1-3 weeks',
      icon: '🎨',
      color: 'neon-pink'
    },
    {
      title: 'Ethical Hacking Training',
      description: 'Learn cybersecurity and ethical hacking with hands-on practical sessions',
      features: ['Kali Linux Training', 'Penetration Testing', 'Security Auditing', '1-on-1 Sessions'],
      pricing: 'Starting from ₹8,000',
      duration: '4-6 weeks',
      icon: '🔐',
      color: 'cyber-aqua'
    },
    {
      title: 'Technical Consultation',
      description: 'Strategic guidance for your tech projects and digital transformation',
      features: ['Architecture Planning', 'Tech Stack Selection', 'Performance Optimization', 'Code Review'],
      pricing: 'Starting from ₹5,000',
      duration: '1-2 weeks',
      icon: '💡',
      color: 'neon-pink'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            What I Can Do For You
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Professional services tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-lg hover:neon-border transition-all duration-500 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon & Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className={`text-xl font-orbitron font-semibold text-${service.color} group-hover:glow-text transition-all duration-300`}>
                    {service.title}
                  </h3>
                  <div className="text-sm text-soft-gray mt-1">{service.duration}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-soft-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-sm text-soft-gray">Starting Price</div>
                <div className={`text-xl font-bold text-${service.color}`}>{service.pricing}</div>
              </div>

              {/* CTA Button */}
              <Button 
                className={service.color === 'cyber-aqua' ? 'cyber-button w-full' : 'w-full bg-gradient-to-r from-neon-pink to-purple-500 hover:from-purple-500 hover:to-neon-pink text-white font-semibold transition-all duration-300'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book This Service
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-orbitron font-bold text-center text-cyber-aqua mb-12">
            My Working Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', desc: 'Building your solution with regular updates' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-border transition-all duration-300">
                  <span className="text-2xl font-orbitron font-bold text-cyber-aqua">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-soft-gray text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-lg neon-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-soft-gray mb-6">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="cyber-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
