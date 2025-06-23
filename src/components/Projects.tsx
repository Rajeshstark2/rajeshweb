import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Cliphunt.in',
      description: 'Advanced social media content downloader with AI-powered features',
      category: 'Tools',
      tags: ['React', 'Node.js', 'API Integration'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Chate Mate',
      description: 'Real-time chat application with end-to-end encryption',
      category: 'Full Stack',
      tags: ['React', 'Socket.io', 'MongoDB'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Voxa AI',
      description: 'Personal AI Assistant - JARVIS-like mobile-ready experience',
      category: 'AI',
      tags: ['Python', 'Gemini AI', 'React Native'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Last Minute Prep',
      description: 'Gemini-powered syllabus analyzer for efficient study planning',
      category: 'AI',
      tags: ['Gemini AI', 'Python', 'Education'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'E-Book Store',
      description: 'Complete online eBook marketplace with payment integration',
      category: 'E-Commerce',
      tags: ['React', 'Stripe', 'Firebase'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'PrabanjamPGM',
      description: 'Full-featured e-commerce website with modern design',
      category: 'E-Commerce',
      tags: ['Next.js', 'MongoDB', 'Tailwind'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'DataInsight Pro',
      description: 'Advanced data visualization dashboard with real-time analytics',
      category: 'Full Stack',
      tags: ['React', 'D3.js', 'Firebase'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Full Stack', 'Tools', 'E-Commerce'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Determine how many projects to show
  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            All Projects
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Innovative projects that showcase the fusion of creativity and technology
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={activeFilter === category 
                ? "cyber-button" 
                : "neon-border text-cyber-aqua hover:bg-cyber-aqua hover:text-cyber-dark"
              }
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg overflow-hidden hover:neon-border transition-all duration-500 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-cyber-aqua/20 to-neon-pink/20 flex items-center justify-center">
                  <div className="text-4xl font-orbitron font-bold text-cyber-aqua">{project.title[0]}</div>
                </div>
                <div className="absolute inset-0 bg-cyber-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-orbitron font-semibold text-white">{project.title}</h4>
                  <span className="text-xs text-cyber-aqua bg-cyber-aqua/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-soft-gray text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-white/5 text-soft-gray px-2 py-1 rounded border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button size="sm" className="cyber-button flex-1">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="neon-border text-cyber-aqua flex-1">
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-8">
            <Button className="cyber-button px-8 py-3" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/rajeshstark2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cyber-button text-lg px-8 py-4">
              View All Projects on GitHub
            </Button>
          </a>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Lines of Code', value: '100K+' },
            { label: 'Technologies Used', value: '25+' },
            { label: 'Happy Clients', value: '30+' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center glass-card p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-orbitron font-bold text-cyber-aqua">{stat.value}</div>
              <div className="text-soft-gray text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
