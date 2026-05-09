import { useState, useCallback, useEffect } from 'react';
import { QUESTION_BANK, CATEGORIES, DIFFICULTY_LEVELS } from '../data/questions';

export const useAdaptiveTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(3); // Start at medium
  const [correctStreak, setCorrectStreak] = useState(0);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [responseTimes, setResponseTimes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [categoryProgress, setCategoryProgress] = useState({});

  // Initialize test with adaptive question selection
  const initializeTest = useCallback(() => {
    // Select 2 questions from each category to ensure diversity
    let questions = [];
    const questionsPerCategory = 2;
    
    CATEGORIES.forEach(category => {
      const categoryQuestions = QUESTION_BANK.filter(q => q.category === category);
      // Start with medium difficulty questions
      const mediumQuestions = categoryQuestions.filter(q => q.difficulty === 3);
      const easyQuestions = categoryQuestions.filter(q => q.difficulty <= 2);
      const hardQuestions = categoryQuestions.filter(q => q.difficulty >= 4);
      
      // Mix difficulties for initial selection
      let selected = [];
      if (mediumQuestions.length >= 1) selected.push(mediumQuestions[0]);
      if (easyQuestions.length >= 1) selected.push(easyQuestions[0]);
      
      // Shuffle and take required number
      selected = selected.sort(() => Math.random() - 0.5).slice(0, questionsPerCategory);
      questions = [...questions, ...selected];
    });
    
    // Shuffle all questions
    questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    
    setSelectedQuestions(questions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCurrentDifficulty(3);
    setCorrectStreak(0);
    setWrongStreak(0);
    setResponseTimes([]);
    setStartTime(Date.now());
    setIsTestComplete(false);
    
    // Initialize category progress
    const initialProgress = {};
    CATEGORIES.forEach(cat => initialProgress[cat] = { correct: 0, total: 0 });
    setCategoryProgress(initialProgress);
  }, []);

  // Adaptive difficulty adjustment
  const adjustDifficulty = useCallback((isCorrect) => {
    let newDifficulty = currentDifficulty;
    
    if (isCorrect) {
      setCorrectStreak(prev => prev + 1);
      setWrongStreak(0);
      
      // Increase difficulty after 2 consecutive correct answers
      if (correctStreak + 1 >= 2 && currentDifficulty < 5) {
        newDifficulty = currentDifficulty + 1;
      }
    } else {
      setCorrectStreak(0);
      setWrongStreak(prev => prev + 1);
      
      // Decrease difficulty after 2 consecutive wrong answers
      if (wrongStreak + 1 >= 2 && currentDifficulty > 1) {
        newDifficulty = currentDifficulty - 1;
      }
    }
    
    setCurrentDifficulty(newDifficulty);
    return newDifficulty;
  }, [currentDifficulty, correctStreak, wrongStreak]);

  // Handle answer submission
  const submitAnswer = useCallback((selectedOption) => {
    if (isTestComplete) return;
    
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const responseTime = Date.now() - startTime;
    
    // Record answer
    const answerRecord = {
      questionId: currentQuestion.id,
      category: currentQuestion.category,
      difficulty: currentQuestion.difficulty,
      selectedOption,
      isCorrect,
      responseTime,
      currentDifficulty
    };
    
    setAnswers(prev => [...prev, answerRecord]);
    setResponseTimes(prev => [...prev, responseTime]);
    
    // Update category progress
    setCategoryProgress(prev => ({
      ...prev,
      [currentQuestion.category]: {
        correct: prev[currentQuestion.category].correct + (isCorrect ? 1 : 0),
        total: prev[currentQuestion.category].total + 1
      }
    }));
    
    // Adjust difficulty for next question
    adjustDifficulty(isCorrect);
    
    // Move to next question or complete test
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setStartTime(Date.now());
    } else {
      setIsTestComplete(true);
    }
  }, [currentQuestionIndex, selectedQuestions, startTime, isTestComplete, adjustDifficulty]);

  // Reset test
  const resetTest = useCallback(() => {
    initializeTest();
  }, [initializeTest]);

  // Get next adaptive question (for future expansion)
  const getNextAdaptiveQuestion = useCallback(() => {
    const usedCategories = answers.map(a => a.category);
    const availableCategories = CATEGORIES.filter(c => !usedCategories.includes(c));
    
    if (availableCategories.length > 0) {
      // Pick from unused category
      const category = availableCategories[Math.floor(Math.random() * availableCategories.length)];
      const categoryQuestions = QUESTION_BANK.filter(q => 
        q.category === category && 
        Math.abs(q.difficulty - currentDifficulty) <= 1
      );
      return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)] || null;
    } else {
      // Pick from category with least questions
      const categoryCounts = {};
      answers.forEach(a => {
        categoryCounts[a.category] = (categoryCounts[a.category] || 0) + 1;
      });
      const leastUsedCategory = Object.entries(categoryCounts)
        .sort((a, b) => a[1] - b[1])[0][0];
      
      const categoryQuestions = QUESTION_BANK.filter(q => 
        q.category === leastUsedCategory && 
        Math.abs(q.difficulty - currentDifficulty) <= 1
      );
      return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)] || null;
    }
  }, [answers, currentDifficulty]);

  return {
    currentQuestionIndex,
    currentQuestion: selectedQuestions[currentQuestionIndex],
    selectedQuestions,
    answers,
    currentDifficulty,
    correctStreak,
    wrongStreak,
    responseTimes,
    isTestComplete,
    categoryProgress,
    submitAnswer,
    resetTest,
    initializeTest,
    totalQuestions: selectedQuestions.length
  };
};
