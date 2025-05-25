import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/profile1.jpg', alt: 'Rajesh - AI Developer' },
    { src: '/profile2.jpg', alt: 'Rajesh - Tech Innovator' },
    { src: '/profile3.jpg', alt: 'Rajesh - AI Enthusiast' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const quickFacts = [
    { label: 'Name', value: 'Rajesh' },
    { label: 'Location', value: 'India' },
    { label: 'Role', value: 'AI Developer & Founder' },
    { label: 'Company', value: 'StarkCloudie' },
    { label: 'Languages', value: 'English , Tamil' },
    { label: 'Experience', value: '5+ Years' },
  ];

  const achievements = [
    { year: '2023', title: 'Founded StarkCloudie', desc: 'Launched AI-first development company' },
    { year: '2022', title: 'CodeHackers YouTube', desc: 'Started educational tech channel' },
    { year: '2021', title: 'Full-Stack Mastery', desc: 'Mastered MERN stack development' },
    { year: '2020', title: 'AI Journey Began', desc: 'Started exploring machine learning' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            The Mind Behind the Code
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Transforming ideas into digital reality through code, creativity, and cutting-edge AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            {/* Profile Image Gallery */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto glass-card rounded-2xl overflow-hidden relative group animate-cyber-pulse">
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <img 
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-orbitron font-bold glow-text">Rajesh</div>
                  <div className="text-sm text-cyber-aqua">AI Developer</div>
                </div>
                {/* Navigation Dots */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImage === index ? 'bg-cyber-aqua scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-gradient rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-pink rounded-full animate-bounce-slow"></div>
            </div>

            {/* Quick Facts */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-orbitron font-semibold text-cyber-aqua mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-sm text-soft-gray">{fact.label}</div>
                    <div className="font-semibold text-white">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story & Timeline */}
          <div className="space-y-8">
            {/* Story */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">My Journey</h3>
              <div className="space-y-4 text-soft-gray leading-relaxed">
                <p>
                  My journey into the digital realm started with curiosity and evolved into a passion for creating 
                  intelligent solutions that bridge the gap between human creativity and artificial intelligence.
                </p>
                <p>
                  From ethical hacking to full-stack development, from prompt engineering to building AI-powered 
                  applications, I've embraced every challenge as an opportunity to push the boundaries of what's possible.
                </p>
                <p>
                  Today, through StarkCloudie, I help businesses and individuals harness the power of AI, 
                  creating digital experiences that are not just functional, but truly transformative.
                </p>
              </div>
            </div>

            {/* Achievement Timeline */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-cyber-aqua mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 glass-card rounded-full flex items-center justify-center neon-border">
                      <span className="text-cyber-aqua font-orbitron font-bold">{achievement.year}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <p className="text-soft-gray text-sm">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* StarkCloudie Section */}
            <div className="glass-card p-8 rounded-lg neon-border">
              <h3 className="text-2xl font-orbitron font-semibold text-neon-pink mb-4">StarkCloudie</h3>
              <p className="text-soft-gray mb-6">
                My brainchild – an AI-first development company that specializes in creating cutting-edge 
                web applications, AI tools, chatbots, and digital solutions that drive real business value.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-cyber-aqua/10 rounded-lg">
                  <div className="text-xl font-bold text-cyber-aqua">50+</div>
                  <div className="text-sm text-soft-gray">Projects Delivered</div>
                </div>
                <div className="text-center p-3 bg-neon-pink/10 rounded-lg">
                  <div className="text-xl font-bold text-neon-pink">30+</div>
                  <div className="text-sm text-soft-gray">Happy Clients</div>
                </div>
              </div>

              <a 
                href="https://starkcloudie.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="cyber-button w-full">
                  Explore StarkCloudie
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
