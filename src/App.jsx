import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import InstructionsPage from "./pages/InstructionsPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { useAdaptiveTest } from "./hooks/useAdaptiveTest";
import { useTimer } from "./hooks/useTimer";

function App() {
  const [currentScreen, setCurrentScreen] = useState("landing"); // landing, instructions, quiz, result
  const {
    currentQuestionIndex,
    currentQuestion,
    selectedQuestions,
    answers,
    currentDifficulty,
    isTestComplete,
    submitAnswer,
    resetTest,
    initializeTest,
  } = useAdaptiveTest();

  useEffect(() => {
    // Initialize test on mount
    initializeTest();
  }, [initializeTest]);

  const handleStart = () => {
    setCurrentScreen("instructions");
  };

  const handleBeginTest = () => {
    setCurrentScreen("quiz");
  };

  const handleAnswerSubmit = (selectedOption) => {
    submitAnswer(selectedOption);
  };

  const handleRestart = () => {
    resetTest();
    setCurrentScreen("landing");
  };

  const handleViewResults = () => {
    setCurrentScreen("result");
  };

  // Auto-transition to results when test is complete
  useEffect(() => {
    console.log("Test completion check:", {
      isTestComplete,
      currentScreen,
      answersLength: answers.length,
    });
    if (isTestComplete && currentScreen === "quiz") {
      console.log("Transitioning to result page");
      handleViewResults();
    }
  }, [isTestComplete, currentScreen, handleViewResults, answers.length]);

  return (
    <div className="App">
      {currentScreen === "landing" && <LandingPage onStart={handleStart} />}
      {currentScreen === "instructions" && (
        <InstructionsPage onStart={handleBeginTest} />
      )}
      {currentScreen === "quiz" && !isTestComplete && (
        <QuizPage
          currentQuestion={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={selectedQuestions.length}
          currentDifficulty={currentDifficulty}
          onSubmitAnswer={handleAnswerSubmit}
        />
      )}
      {currentScreen === "result" && (
        <ResultPage answers={answers} onRestart={handleRestart} />
      )}
      {isTestComplete && currentScreen !== "result" && (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white mb-4">Test Complete! Loading results...</p>
            <button
              onClick={handleViewResults}
              className="px-6 py-3 bg-primary-600 rounded-full text-white"
            >
              View Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
