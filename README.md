# 🧠 Adaptive IQ Analyzer

A production-quality, adaptive cognitive assessment platform that evaluates multiple intelligence domains through a sophisticated frontend-only testing system.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF)

## ✨ Features

- **Adaptive Testing Engine**: Dynamically adjusts question difficulty based on performance
- **5 Cognitive Domains**: Evaluates Verbal Comprehension, Logical & Abstract Reasoning, Spatial Visualization, Quantitative Reasoning, and Working Memory
- **50+ Question Bank**: Comprehensive question pool with 10 questions per session
- **Real-time Analytics**: Detailed performance reports with IQ estimation
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Privacy Focused**: No backend, no database - everything runs locally in the browser
- **No Registration Required**: Start testing immediately

## 🎯 Cognitive Domains Assessed

1. **Verbal Comprehension** - Language processing, vocabulary, analogies
2. **Logical & Abstract Reasoning** - Pattern recognition, syllogisms, numerical sequences
3. **Spatial Visualization** - Mental rotation, 3D manipulation, geometric reasoning
4. **Quantitative Reasoning** - Numerical logic, arithmetic, word problems
5. **Working Memory & Perceptual Reasoning** - Information retention, pattern reconstruction

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shreyan-coder123/Adaptive-Intelligence.git
cd Adaptive-Intelligence
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📊 Test Flow

1. **Landing Page** - Introduction and cognitive domain overview
2. **Instructions** - Clear guidelines and pro tips
3. **Quiz** - 10 adaptive questions with timer and progress tracking
4. **Results** - Comprehensive cognitive analysis report

## 📈 Analytics & Reports

After completing the assessment, you'll receive:

- **Overall Cognitive Score** (0-100)
- **Estimated IQ Range** with percentile ranking
- **Category Performance Breakdown** with visual progress bars
- **Strongest & Weakest Domains** identification
- **Response Speed Analysis** with trend tracking
- **Adaptive Performance Bonus** calculation
- **Personalized Feedback** with improvement suggestions

## 🏗️ Project Structure

```
adaptive-iq-analyzer/
├── src/
│   ├── components/      # Reusable components
│   ├── data/           # Question bank (50+ questions)
│   ├── hooks/          # Custom React hooks (adaptive test, timer)
│   ├── pages/          # Page components (Landing, Instructions, Quiz, Results)
│   ├── utils/          # Score calculation and analytics utilities
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🧩 Adaptive Algorithm

The intelligent adaptive system:

- Starts at medium difficulty (level 3)
- Increases difficulty after 2 consecutive correct answers
- Decreases difficulty after 2 consecutive wrong answers
- Maintains category diversity across questions
- Tracks response time for performance analysis
- Calculates adaptive bonus based on difficulty progression

## 🎨 Technologies Used

- **React 18.2.0** - UI framework
- **Vite 5.0.8** - Build tool and dev server
- **Tailwind CSS 3.4.0** - Styling
- **Recharts 2.10.3** - Data visualization
- **PostCSS & Autoprefixer** - CSS processing

## 📝 Question Types

### Verbal Comprehension
- Analogies
- Synonyms & Antonyms
- Word relationships
- Reading comprehension

### Logical & Abstract Reasoning
- Number sequences
- Pattern prediction
- Matrix logic
- Syllogisms
- Symbol reasoning

### Spatial Visualization
- Mental rotation
- Shape matching
- Cube folding
- Direction reasoning

### Quantitative Reasoning
- Numerical logic
- Arithmetic reasoning
- Word problems
- Equation solving

### Working Memory
- Reverse number memory
- Visual sequence memory
- Pattern reconstruction
- Symbol ordering

## 🔒 Privacy & Security

- **No Backend**: All processing happens in the browser
- **No Data Collection**: No personal information is collected
- **Local Storage**: Results are stored locally on your device
- **No Tracking**: No analytics or tracking scripts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by professional cognitive assessment platforms
- Designed with modern UI/UX principles
- Built with love for the developer community

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using React & Tailwind CSS**
