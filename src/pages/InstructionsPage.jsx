import { useState } from 'react';

const InstructionsPage = ({ onStart }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useState(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const rules = [
    {
      title: '10 Adaptive Questions',
      description: 'You will answer 10 carefully crafted questions that adapt to your performance level.',
      icon: '📝'
    },
    {
      title: 'Timer System',
      description: 'Each question has a time limit. Stay focused and answer efficiently.',
      icon: '⏱️'
    },
    {
      title: 'Category Variety',
      description: 'Questions span 5 cognitive domains: Verbal, Logical, Spatial, Quantitative, and Working Memory.',
      icon: '🎯'
    },
    {
      title: 'Adaptive Difficulty',
      description: 'The test adjusts difficulty based on your answers - correct answers lead to harder questions.',
      icon: '📈'
    },
    {
      title: 'Detailed Analysis',
      description: 'Receive a comprehensive cognitive profile with IQ estimation and performance insights.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl shadow-primary-500/50 mb-6">
            <span className="text-4xl">📋</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Assessment</span>
            <span className="text-white"> Guidelines</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read the following instructions carefully before beginning your cognitive assessment
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="glass-dark p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{rule.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{rule.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="glass p-8 rounded-2xl mb-12">
          <h3 className="text-white font-semibold mb-4 text-xl flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Pro Tips
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span>Find a quiet environment free from distractions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span>Take your time to think through each question carefully</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span>Don't stress about getting every question right - the test adapts to you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span>Your results are private and stored locally in your browser</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="group px-12 py-5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-bold text-lg btn-glow hover:scale-105 transition-all duration-300 animate-glow"
          >
            <span className="flex items-center gap-3">
              Begin Assessment
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Estimated time: 5-10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
