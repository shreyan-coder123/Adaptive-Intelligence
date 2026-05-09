import { useState } from 'react';

const LandingPage = ({ onStart }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useState(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const categories = [
    {
      name: 'Verbal Comprehension',
      icon: '📚',
      description: 'Language processing and vocabulary skills',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Logical & Abstract Reasoning',
      icon: '🧩',
      description: 'Pattern recognition and logical thinking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Spatial Visualization',
      icon: '🎯',
      description: 'Mental rotation and 3D manipulation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Quantitative Reasoning',
      icon: '🔢',
      description: 'Numerical logic and mathematical thinking',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Working Memory',
      icon: '🧠',
      description: 'Information retention and processing',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Title */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl shadow-primary-500/50 mb-6">
            <span className="text-5xl">🧠</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gradient">Adaptive IQ</span>
          <br />
          <span className="text-white">Analyzer</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover your cognitive potential through our advanced adaptive assessment system
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">10 Adaptive Questions</span>
          </div>
          <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="text-sm text-gray-300">5 Cognitive Domains</span>
          </div>
          <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            <span className="text-sm text-gray-300">Real-time Analysis</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="glass-dark p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{category.name}</h3>
              <p className="text-gray-400 text-xs">{category.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative px-12 py-5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-bold text-lg btn-glow hover:scale-105 transition-all duration-300 animate-glow"
        >
          <span className="relative z-10 flex items-center gap-3">
            Start Assessment
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Registration Required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Privacy Focused</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Scientifically Designed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
