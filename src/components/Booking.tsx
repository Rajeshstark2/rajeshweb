import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' });

  const services = [
    { id: 'web-dev', name: 'Website Development', icon: '🌐' },
    { id: 'ai-training', name: 'AI/ML Training', icon: '🤖' },
    { id: 'ethical-hacking', name: 'Ethical Hacking Guidance', icon: '🔒' },
    { id: 'consultation', name: 'Tech Consultation', icon: '💡' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvarvgl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setSubmitMessage({ 
          type: 'success', 
          message: 'Your booking request has been submitted successfully! We will contact you shortly.' 
        });
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
        setSelectedService('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ 
        type: 'error', 
        message: 'There was a problem submitting your form. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            📅 Book an Appointment
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Let's collaborate or get trained in AI, Web Development, or Cybersecurity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">
              Schedule Your Session
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitMessage.message && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}>
                  {submitMessage.message}
                </div>
              )}
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
                <label className="text-soft-gray text-sm">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <label className="text-soft-gray text-sm">Service *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`glass-card p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedService === service.id ? 'neon-border' : 'hover:border-cyber-aqua/30'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={() => setSelectedService(service.id)}
                        className="hidden"
                        required
                      />
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl flex-shrink-0">{service.icon}</span>
                        <span className="text-white text-sm truncate">{service.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-soft-gray text-sm">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or requirements..."
                />
              </div>

              <input type="hidden" name="subject" value="Booking Request" />

              <Button 
                type="submit" 
                className="cyber-button w-full text-lg py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Now'}
              </Button>
            </form>
          </div>

          {/* Calendar & Info */}
          <div className="space-y-8">
            {/* Calendar Embed */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">
                Available Time Slots
              </h3>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://calendly.com/rajesh-devcoder"
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>

            {/* Booking Info */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-neon-pink mb-6">
                Booking Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-border">
                    <span className="text-cyber-aqua text-xl">⏰</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Session Duration</div>
                    <div className="text-soft-gray text-sm">30-60 minutes based on service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-border">
                    <span className="text-cyber-aqua text-xl">💬</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Communication</div>
                    <div className="text-soft-gray text-sm">Video call via Google Meet/Zoom</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center neon-border">
                    <span className="text-cyber-aqua text-xl">📝</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Preparation</div>
                    <div className="text-soft-gray text-sm">Please prepare your questions and requirements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking; 