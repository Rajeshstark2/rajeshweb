import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, X, Bot, User } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = 'AIzaSyAEeFgIxAUF3uzVwXtAJmaCkHvMnEzXPgc';
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an AI assistant for Rajesh's portfolio website. Provide brief, concise answers about: ${userMessage}. 
              
              Key Points (use only relevant ones):
              - Founder of StarkCloudie (AI-first company)
              - Services: AI Development, Web Development, Ethical Hacking
              - 5+ years experience
              - Based in India
              - Languages: English, Tamil
              
              Response Guidelines:
              1. Keep answers under 2-3 sentences
              2. Focus on most relevant information only
              3. Use bullet points for multiple items
              4. Be direct and professional
              5. Include pricing only if specifically asked
              
              Format: Start with a direct answer, then add 1-2 key points if needed.`
            }]
          }]
        })
      });

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I apologize, but I couldn't process your request at the moment. Please try again later.";

      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 glass-card p-4 rounded-full neon-border hover:scale-110 transition-all duration-300 animate-float"
      >
        <Bot className="w-6 h-6 text-cyber-aqua" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] glass-card rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-cyber-aqua" />
              <h3 className="text-white font-orbitron">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-soft-gray hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-cyber-aqua/20 text-white'
                      : 'glass-card text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.role === 'assistant' ? (
                      <Bot className="w-4 h-4 text-cyber-aqua" />
                    ) : (
                      <User className="w-4 h-4 text-cyber-aqua" />
                    )}
                    <span className="text-xs text-soft-gray">
                      {message.role === 'assistant' ? 'AI Assistant' : 'You'}
                    </span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my services..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-soft-gray focus:border-cyber-aqua focus:outline-none"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="cyber-button p-2"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot; 