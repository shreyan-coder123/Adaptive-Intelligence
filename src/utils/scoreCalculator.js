// Utility functions for calculating scores and generating analytics

export const calculateOverallScore = (answers) => {
  if (!answers || answers.length === 0) return 0;
  
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const totalAnswers = answers.length;
  
  // Base score from accuracy
  let score = (correctAnswers / totalAnswers) * 100;
  
  // Bonus for difficulty
  const avgDifficulty = answers.reduce((sum, a) => sum + a.difficulty, 0) / totalAnswers;
  const difficultyBonus = (avgDifficulty - 3) * 5; // ±5 points based on avg difficulty
  
  // Bonus for speed (faster = better, but not too fast)
  const avgResponseTime = answers.reduce((sum, a) => sum + a.responseTime, 0) / totalAnswers;
  const optimalTime = 15000; // 15 seconds optimal
  const speedBonus = Math.max(-10, Math.min(10, (optimalTime - avgResponseTime) / 2000));
  
  // Adaptive performance bonus
  const adaptiveBonus = calculateAdaptiveBonus(answers);
  
  score = score + difficultyBonus + speedBonus + adaptiveBonus;
  
  return Math.max(0, Math.min(100, Math.round(score)));
};

export const calculateAdaptiveBonus = (answers) => {
  if (!answers || answers.length < 2) return 0;
  
  let bonus = 0;
  let correctCount = 0;
  
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].isCorrect) {
      correctCount++;
      
      // Bonus for getting harder questions right
      if (i > 0 && answers[i].difficulty > answers[i - 1].difficulty) {
        bonus += 2;
      }
    } else {
      // Penalty for getting easier questions wrong
      if (i > 0 && answers[i].difficulty < answers[i - 1].difficulty) {
        bonus -= 1;
      }
    }
  }
  
  return Math.max(-5, Math.min(10, bonus));
};

export const estimateIQ = (overallScore) => {
  // Map 0-100 score to IQ range (70-140)
  const baseIQ = 70;
  const iqRange = 70; // 140 - 70
  
  const estimatedIQ = baseIQ + (overallScore / 100) * iqRange;
  const lowerBound = Math.max(70, estimatedIQ - 10);
  const upperBound = Math.min(140, estimatedIQ + 10);
  
  return {
    estimated: Math.round(estimatedIQ),
    range: `${Math.round(lowerBound)}-${Math.round(upperBound)}`
  };
};

export const calculateCategoryScores = (answers, categories) => {
  const categoryScores = {};
  
  categories.forEach(category => {
    const categoryAnswers = answers.filter(a => a.category === category);
    
    if (categoryAnswers.length === 0) {
      categoryScores[category] = { score: 0, correct: 0, total: 0, percentage: 0 };
      return;
    }
    
    const correct = categoryAnswers.filter(a => a.isCorrect).length;
    const total = categoryAnswers.length;
    const percentage = (correct / total) * 100;
    
    // Weight by difficulty
    const avgDifficulty = categoryAnswers.reduce((sum, a) => sum + a.difficulty, 0) / total;
    const weightedScore = percentage * (avgDifficulty / 3);
    
    categoryScores[category] = {
      score: Math.round(weightedScore),
      correct,
      total,
      percentage: Math.round(percentage),
      avgDifficulty: Math.round(avgDifficulty * 10) / 10
    };
  });
  
  return categoryScores;
};

export const findStrongestWeakest = (categoryScores) => {
  const entries = Object.entries(categoryScores);
  
  if (entries.length === 0) {
    return { strongest: null, weakest: null };
  }
  
  const sorted = entries.sort((a, b) => b[1].percentage - a[1].percentage);
  
  return {
    strongest: sorted[0][0],
    strongestScore: sorted[0][1].percentage,
    weakest: sorted[sorted.length - 1][0],
    weakestScore: sorted[sorted.length - 1][1].percentage
  };
};

export const analyzeResponseSpeed = (responseTimes) => {
  if (!responseTimes || responseTimes.length === 0) {
    return { average: 0, fastest: 0, slowest: 0, trend: 'stable' };
  }
  
  const average = responseTimes.reduce((sum, t) => sum + t, 0) / responseTimes.length;
  const fastest = Math.min(...responseTimes);
  const slowest = Math.max(...responseTimes);
  
  // Calculate trend
  let fasterCount = 0;
  let slowerCount = 0;
  
  for (let i = 1; i < responseTimes.length; i++) {
    if (responseTimes[i] < responseTimes[i - 1]) fasterCount++;
    else slowerCount++;
  }
  
  let trend = 'stable';
  if (fasterCount > slowerCount * 1.5) trend = 'improving';
  else if (slowerCount > fasterCount * 1.5) trend = 'declining';
  
  return {
    average: Math.round(average),
    fastest: Math.round(fastest),
    slowest: Math.round(slowest),
    trend
  };
};

export const calculateAccuracy = (answers) => {
  if (!answers || answers.length === 0) return 0;
  
  const correct = answers.filter(a => a.isCorrect).length;
  return Math.round((correct / answers.length) * 100);
};

export const getDifficultyProgression = (answers) => {
  if (!answers || answers.length === 0) return [];
  
  return answers.map(a => a.difficulty);
};

export const generatePerformanceFeedback = (categoryScores, overallScore) => {
  const feedback = [];
  const { strongest, weakest, strongestScore, weakestScore } = findStrongestWeakest(categoryScores);
  
  // Overall performance
  if (overallScore >= 85) {
    feedback.push('Exceptional cognitive performance across all domains.');
  } else if (overallScore >= 70) {
    feedback.push('Strong cognitive abilities with well-rounded performance.');
  } else if (overallScore >= 55) {
    feedback.push('Good cognitive functioning with areas for improvement.');
  } else {
    feedback.push('Developing cognitive skills with potential for growth.');
  }
  
  // Strongest domain
  if (strongest && strongestScore >= 80) {
    const feedbackMap = {
      'Verbal Comprehension': 'Your verbal comprehension ability is significantly above average, showing excellent language processing skills.',
      'Logical & Abstract Reasoning': 'Your abstract reasoning ability demonstrates exceptional pattern recognition and logical thinking.',
      'Spatial Visualization': 'Your spatial visualization skills indicate strong mental rotation and 3D manipulation abilities.',
      'Quantitative Reasoning': 'Your quantitative reasoning shows superior numerical logic and mathematical thinking.',
      'Working Memory & Perceptual Reasoning': 'Your working memory performance suggests excellent information retention and processing.'
    };
    feedback.push(feedbackMap[strongest] || `Your ${strongest.toLowerCase()} performance is outstanding.`);
  }
  
  // Weakest domain
  if (weakest && weakestScore < 60) {
    const improvementMap = {
      'Verbal Comprehension': 'Consider reading more complex texts and practicing vocabulary exercises to enhance verbal skills.',
      'Logical & Abstract Reasoning': 'Practice puzzles and logic games to strengthen abstract reasoning abilities.',
      'Spatial Visualization': 'Engage in activities like building models or solving spatial puzzles to improve visualization.',
      'Quantitative Reasoning': 'Regular practice with mathematical problems can enhance quantitative reasoning skills.',
      'Working Memory & Perceptual Reasoning': 'Memory games and dual-task exercises can help improve working memory capacity.'
    };
    feedback.push(improvementMap[weakest] || `Practice exercises focusing on ${weakest.toLowerCase()} could be beneficial.`);
  }
  
  return feedback;
};

export const getPercentileRank = (overallScore) => {
  // Approximate percentile mapping
  if (overallScore >= 95) return 99;
  if (overallScore >= 90) return 97;
  if (overallScore >= 85) return 95;
  if (overallScore >= 80) return 90;
  if (overallScore >= 75) return 84;
  if (overallScore >= 70) return 75;
  if (overallScore >= 65) return 63;
  if (overallScore >= 60) return 50;
  if (overallScore >= 55) return 37;
  if (overallScore >= 50) return 25;
  if (overallScore >= 45) return 16;
  if (overallScore >= 40) return 10;
  if (overallScore >= 35) return 5;
  if (overallScore >= 30) return 2;
  return 1;
};
