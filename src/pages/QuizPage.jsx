import { useState, useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';

const QuizPage = ({ currentQuestion, questionIndex, totalQuestions, currentDifficulty, onSubmitAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const { timeLeft: timerTime, percentage: timerPercentage } = useTimer(60, () => {
    if (selectedOption === null) {
      handleSubmitAnswer(-1); // Auto-submit on timeout
    }
  });

  useEffect(() => {
    setSelectedOption(null);
    setIsTransitioning(false);
  }, [currentQuestion]);

  useEffect(() => {
    if (timerTime <= 10 && timerTime > 0) {
      // Warning sound could be added here
    }
  }, [timerTime]);

  const handleSubmitAnswer = (optionIndex) => {
    if (isTransitioning || selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    setIsTransitioning(true);
    
    setTimeout(() => {
      onSubmitAnswer(optionIndex);
    }, 500);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 1: return 'from-green-500 to-emerald-500';
      case 2: return 'from-blue-500 to-cyan-500';
      case 3: return 'from-yellow-500 to-orange-500';
      case 4: return 'from-orange-500 to-red-500';
      case 5: return 'from-red-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyLabel = (difficulty) => {
    switch(difficulty) {
      case 1: return 'Very Easy';
      case 2: return 'Easy';
      case 3: return 'Medium';
      case 4: return 'Hard';
      case 5: return 'Very Hard';
      default: return 'Medium';
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {/* Progress */}
          <div className="flex items-center gap-4">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-gray-400 text-sm">Question</span>
              <span className="text-white font-bold ml-2">{questionIndex + 1}/{totalQuestions}</span>
            </div>
          </div>

          {/* Timer */}
          <div className="glass px-6 py-2 rounded-full">
            <div className="flex items-center gap-3">
              <svg className={`w-5 h-5 ${timerTime <= 10 ? 'text-red-500 animate-pulse' : 'text-primary-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`font-bold ${timerTime <= 10 ? 'text-red-500' : 'text-white'}`}>
                {timerTime}s
              </span>
            </div>
          </div>

          {/* Difficulty Badge */}
          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getDifficultyColor(currentDifficulty)}`}>
            <span className="text-white text-sm font-semibold">{getDifficultyLabel(currentDifficulty)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 ease-out"
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className={`glass-dark p-8 rounded-3xl mb-8 animate-slide-up ${isTransitioning ? 'opacity-50' : ''}`}>
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-semibold">
              {currentQuestion.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-semibold">
              {currentQuestion.cognitiveSkill}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSubmitAnswer(index)}
                disabled={selectedOption !== null}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 ${
                  selectedOption === null
                    ? 'glass hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]'
                    : selectedOption === index
                    ? 'bg-primary-500/30 border-2 border-primary-500 scale-[1.02]'
                    : 'opacity-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    selectedOption === null
                      ? 'bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400'
                      : selectedOption === index
                      ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white'
                      : 'bg-gray-700/50 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`text-lg ${selectedOption === index ? 'text-white font-semibold' : 'text-gray-200'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Timer Bar */}
        <div className="mb-4">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-linear ${
                timerTime <= 10 ? 'bg-gradient-to-r from-red-500 to-rose-500' : 'bg-gradient-to-r from-primary-500 to-accent-500'
              }`}
              style={{ width: `${timerPercentage}%` }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-500 text-sm">
          Select the best answer. The test adapts to your performance.
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
