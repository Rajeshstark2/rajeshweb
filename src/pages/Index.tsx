import React, { useEffect } from 'react';
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
  );
};

export default Index;
