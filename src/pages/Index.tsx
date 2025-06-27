import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  useEffect(() => {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList?.contains('cursor-pointer'))) {
        cursor.classList.add('custom-cursor-large');
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('custom-cursor-large');
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Easter egg - Matrix mode
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        document.body.classList.toggle('matrix-mode');
        // Add matrix theme styles
        if (document.body.classList.contains('matrix-mode')) {
          document.body.style.background = '#000';
          document.body.style.color = '#00ff00';
          console.log('🚀 Matrix mode activated! Welcome to the digital realm...');
        } else {
          document.body.style.background = '';
          document.body.style.color = '';
          console.log('👋 Matrix mode deactivated. Back to reality!');
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('keydown', handleKeyPress);
      if (cursor.parentNode) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Rajesh - AI Developer & Digital Creator | StarkCloudie</title>
        <meta name="title" content="Rajesh - AI Developer & Digital Creator | StarkCloudie" />
        <meta name="description" content="Explore the work of Rajesh – AI Developer, Ethical Hacker, Full-Stack Developer, and Founder of StarkCloudie." />
        <meta name="keywords" content="AI Developer, Ethical Hacker, Full-Stack Developer, StarkCloudie, Rajesh, Web Development, Cybersecurity" />
        <meta name="author" content="Rajesh" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajesh2005.netlify.app" />
        <meta property="og:title" content="Rajesh - AI Developer & Digital Creator" />
        <meta property="og:description" content="Explore the work of Rajesh – AI Developer, Ethical Hacker, Full-Stack Developer, and Founder of StarkCloudie." />
        <meta property="og:image" content="https://rajesh2005.netlify.app/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rajesh Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rajesh2005.netlify.app" />
        <meta property="twitter:title" content="Rajesh - AI Developer & Digital Creator" />
        <meta property="twitter:description" content="Explore the work of Rajesh – AI Developer, Ethical Hacker, Full-Stack Developer, and Founder of StarkCloudie." />
        <meta property="twitter:image" content="https://rajesh2005.netlify.app/preview.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://rajesh2005.netlify.app" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Booking />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
