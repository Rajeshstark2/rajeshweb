
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'cyber-aqua',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'Google Colab', level: 88 },
        { name: 'Gemini AI', level: 92 },
      ]
    },
    {
      title: 'Web Development',
      color: 'neon-pink',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Prompt Engineering',
      color: 'cyber-aqua',
      skills: [
        { name: 'ChatGPT', level: 96 },
        { name: 'Gemini', level: 94 },
        { name: 'DeepSeek', level: 88 },
        { name: 'Claude', level: 85 },
        { name: 'API Integration', level: 92 },
      ]
    },
    {
      title: 'Design & Security',
      color: 'neon-pink',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 82 },
        { name: 'Kali Linux', level: 85 },
        { name: 'Burp Suite', level: 80 },
        { name: 'UI/UX Design', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold glow-text mb-4">
            My Digital Toolbox
          </h2>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Technologies and tools I've mastered to bring ideas to life
          </p>
        </div>

        {/* Fun Fact */}
        <div className="glass-card p-6 rounded-lg mb-12 max-w-2xl mx-auto text-center neon-border">
          <div className="text-2xl font-orbitron font-bold text-cyber-aqua mb-2">200+</div>
          <div className="text-soft-gray">Custom AI workflows and prompts engineered</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-8 rounded-lg animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className={`text-2xl font-orbitron font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-soft-gray text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          category.color === 'cyber-aqua' 
                            ? 'from-cyber-aqua to-blue-400' 
                            : 'from-neon-pink to-purple-400'
                        } transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category specific highlights */}
              {category.title === 'AI & Machine Learning' && (
                <div className="mt-6 p-4 bg-cyber-aqua/10 rounded-lg">
                  <div className="text-sm text-cyber-aqua font-semibold mb-1">Specialty</div>
                  <div className="text-xs text-soft-gray">Building intelligent chatbots and automation workflows</div>
                </div>
              )}

              {category.title === 'Prompt Engineering' && (
                <div className="mt-6 p-4 bg-cyber-aqua/10 rounded-lg">
                  <div className="text-sm text-cyber-aqua font-semibold mb-1">Achievement</div>
                  <div className="text-xs text-soft-gray">Created JARVIS-like AI assistant for mobile</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-space font-semibold text-soft-gray mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', 'Python', 'Firebase', 'MongoDB', 'Next.js', 'Tailwind', 
              'Figma', 'GitHub', 'Gemini', 'ChatGPT', 'Node.js', 'TypeScript'
            ].map((tech, index) => (
              <div 
                key={index}
                className="glass-card p-4 rounded-lg hover:neon-border transition-all duration-300 cursor-pointer hover:scale-110 floating-element"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyber-aqua font-medium text-sm">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
