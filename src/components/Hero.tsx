import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Instagram, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3,
        alpha: Math.random() * 0.7,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 247, ${particle.alpha})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 247, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RajeshCoding', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@Codehackers', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/rajesh.codes', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rajesh-coding', label: 'LinkedIn' },
  ];

  const handleCVDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the path to your CV file in the public folder
    link.href = '/Rajesh_CV.pdf';
    // Set the download attribute with the desired filename
    link.download = 'Rajesh_CV.pdf';
    // Append to body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="animate-slide-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full glass-card neon-border mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-cyber-aqua rounded-full mr-3 animate-pulse"></div>
            <span className="text-cyber-aqua text-sm font-space">Welcome to my Digital Universe</span>
          </div>
          
          {/* Main Name Card - Enhanced glassmorphism with transparent background */}
          <div className="backdrop-blur-md bg-white/5 border border-cyan-400/20 p-8 md:p-12 rounded-3xl mb-8 shadow-[0_8px_32px_0_rgba(0,255,247,0.2)] hover:shadow-[0_12px_48px_0_rgba(0,255,247,0.3)] transition-all duration-500">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight text-white animate-fade-in" 
                style={{ 
                  textShadow: '0 0 20px rgba(0, 255, 247, 0.8), 0 0 40px rgba(0, 255, 247, 0.4), 0 0 60px rgba(0, 255, 247, 0.2)',
                  filter: 'drop-shadow(0 0 10px rgba(0, 255, 247, 0.5))'
                }}>
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">Rajesh</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="text-lg md:text-xl text-cyan-300 font-space font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                AI Trainer • Ethical Hacker • Full Stack Developer
              </div>
              <div className="text-base md:text-lg text-pink-300 font-space animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Founder of StarkCloudie
              </div>
              <div className="max-w-2xl mx-auto text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Transforming ideas into intelligent digital solutions through code, creativity, and cutting-edge AI
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 justify-center items-center mb-8 animate-fade-in max-w-md mx-auto sm:max-w-none" style={{ animationDelay: '0.8s' }}>
              <Button 
                className="cyber-button text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Me Now
              </Button>
              <Button 
                variant="outline" 
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-cyber-dark text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4 col-span-2 sm:col-span-1"
                onClick={handleCVDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-element glass-card p-4 rounded-full hover:neon-border cursor-pointer transition-all duration-300 hover:scale-110 group"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 text-cyber-aqua group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1.4s' }}>
            {[
              { value: '200+', label: 'AI Workflows' },
              { value: '50+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '5+', label: 'Years' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 rounded-lg text-center hover:neon-border transition-all duration-300">
                <div className="text-2xl font-orbitron font-bold text-cyber-aqua">{stat.value}</div>
                <div className="text-sm text-soft-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="text-cyber-aqua text-sm font-space mb-2 text-center">Scroll to explore</div>
        <div className="w-0.5 h-16 bg-cyber-gradient mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
