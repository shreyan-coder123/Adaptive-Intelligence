import { useState, useEffect } from "react";
import {
  calculateOverallScore,
  estimateIQ,
  calculateCategoryScores,
  findStrongestWeakest,
  analyzeResponseSpeed,
  calculateAccuracy,
  generatePerformanceFeedback,
  getPercentileRank,
} from "../utils/scoreCalculator";
import { CATEGORIES } from "../data/questions";

const ResultPage = ({ answers, onRestart }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("ResultPage mounted with answers:", answers);
    setTimeout(() => setIsLoaded(true), 100);
  }, [answers]);

  // Calculate all metrics
  let overallScore,
    iqEstimate,
    categoryScores,
    strongest,
    weakest,
    speedAnalysis,
    accuracy,
    percentile,
    feedback;

  try {
    overallScore = calculateOverallScore(answers);
    iqEstimate = estimateIQ(overallScore);
    categoryScores = calculateCategoryScores(answers, CATEGORIES);
    const result = findStrongestWeakest(categoryScores);
    strongest = result.strongest;
    weakest = result.weakest;
    speedAnalysis = analyzeResponseSpeed(answers.map((a) => a.responseTime));
    accuracy = calculateAccuracy(answers);
    percentile = getPercentileRank(overallScore);
    feedback = generatePerformanceFeedback(categoryScores, overallScore);
  } catch (err) {
    console.error("Error calculating metrics:", err);
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-500 mb-4">
            Error calculating results: {err.message}
          </p>
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-primary-600 rounded-full text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 85) return "from-green-500 to-emerald-500";
    if (score >= 70) return "from-blue-500 to-cyan-500";
    if (score >= 55) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-rose-500";
  };

  const getScoreLabel = (score) => {
    if (score >= 85) return "Exceptional";
    if (score >= 70) return "Excellent";
    if (score >= 55) return "Good";
    if (score >= 40) return "Average";
    return "Developing";
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-4 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl shadow-primary-500/50 mb-6 animate-float">
            <span className="text-4xl">�</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Cognitive</span>
            <span className="text-white"> Analysis Report</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your personalized cognitive performance assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-dark p-8 rounded-3xl text-center">
            <h3 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
              Overall Score
            </h3>
            <div
              className={`inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br ${getScoreColor(overallScore)} shadow-2xl mb-4`}
            >
              <span className="text-5xl font-bold text-white">
                {overallScore}
              </span>
            </div>
            <p
              className={`text-xl font-semibold mb-2 ${overallScore >= 70 ? "text-green-400" : overallScore >= 55 ? "text-yellow-400" : "text-red-400"}`}
            >
              {getScoreLabel(overallScore)}
            </p>
            <p className="text-gray-500 text-sm">Out of 100</p>
          </div>

          <div className="glass-dark p-8 rounded-3xl text-center">
            <h3 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
              Estimated IQ
            </h3>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50 mb-4">
              <span className="text-5xl font-bold text-white">
                {iqEstimate.estimated}
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-300 mb-2">
              Range: {iqEstimate.range}
            </p>
            <p className="text-gray-500 text-sm">Percentile: {percentile}%</p>
          </div>

          <div className="glass-dark p-8 rounded-3xl text-center">
            <h3 className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
              Accuracy
            </h3>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/50 mb-4">
              <span className="text-5xl font-bold text-white">{accuracy}%</span>
            </div>
            <p className="text-lg font-semibold text-gray-300 mb-2">
              {answers.filter((a) => a.isCorrect).length}/{answers.length}{" "}
              Correct
            </p>
            <p className="text-gray-500 text-sm">
              Questions answered correctly
            </p>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-3xl mb-12">
          <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
            <span className="text-2xl">�</span> Category Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((category) => (
              <div key={category} className="glass p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{category}</h4>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                      style={{
                        width: `${categoryScores[category]?.percentage || 0}%`,
                      }}
                    />
                  </div>
                  <span className="text-white font-bold">
                    {categoryScores[category]?.percentage || 0}%
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {categoryScores[category]?.correct || 0}/
                  {categoryScores[category]?.total || 0} correct
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
              <h4 className="text-white font-semibold">Strongest Domain</h4>
            </div>
            <p className="text-2xl font-bold text-green-400 mb-1">
              {strongest || "N/A"}
            </p>
            <p className="text-gray-400 text-sm">
              {categoryScores[strongest]?.percentage || 0}% accuracy
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="text-white font-semibold">Weakest Domain</h4>
            </div>
            <p className="text-2xl font-bold text-orange-400 mb-1">
              {weakest || "N/A"}
            </p>
            <p className="text-gray-400 text-sm">
              {categoryScores[weakest]?.percentage || 0}% accuracy
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h4 className="text-white font-semibold">Avg Response Time</h4>
            </div>
            <p className="text-2xl font-bold text-blue-400 mb-1">
              {speedAnalysis.average}s
            </p>
            <p className="text-gray-400 text-sm">
              Trend: {speedAnalysis.trend}
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <h4 className="text-white font-semibold">Adaptive Bonus</h4>
            </div>
            <p className="text-2xl font-bold text-purple-400 mb-1">
              {overallScore >= 70 ? "+" : ""}
              {(overallScore - 50).toFixed(0)}
            </p>
            <p className="text-gray-400 text-sm">Above baseline</p>
          </div>
        </div>

        <div className="glass-dark p-8 rounded-3xl mb-12">
          <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
            <span className="text-2xl">💡</span> Performance Insights
          </h3>
          <div className="space-y-4">
            {feedback.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="group px-12 py-5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-bold text-lg btn-glow hover:scale-105 transition-all duration-300 animate-glow"
          >
            <span className="flex items-center gap-3">
              Take Assessment Again
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </span>
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Your results are private and stored locally
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
