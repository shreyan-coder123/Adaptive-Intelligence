// Comprehensive Question Bank for Adaptive IQ Analyzer
// 50+ questions across 5 cognitive domains

export const QUESTION_BANK = [
  // VERBAL COMPREHENSION (10 questions)
  {
    id: 'v1',
    category: 'Verbal Comprehension',
    difficulty: 1,
    question: 'Complete the analogy: Book is to Reading as Fork is to...',
    options: ['Kitchen', 'Eating', 'Spoon', 'Dinner'],
    correctAnswer: 1,
    explanation: 'A book is used for reading, just as a fork is used for eating.',
    cognitiveSkill: 'Analogical Reasoning'
  },
  {
    id: 'v2',
    category: 'Verbal Comprehension',
    difficulty: 2,
    question: 'Which word is most similar in meaning to "Ephemeral"?',
    options: ['Eternal', 'Temporary', 'Strong', 'Visible'],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time, similar to temporary.',
    cognitiveSkill: 'Vocabulary'
  },
  {
    id: 'v3',
    category: 'Verbal Comprehension',
    difficulty: 1,
    question: 'Choose the word that does not belong:',
    options: ['Rose', 'Tulip', 'Daisy', 'Tree'],
    correctAnswer: 3,
    explanation: 'Rose, Tulip, and Daisy are flowers, while Tree is a plant of different category.',
    cognitiveSkill: 'Categorization'
  },
  {
    id: 'v4',
    category: 'Verbal Comprehension',
    difficulty: 3,
    question: 'Complete: "The doctor was _____ about the patient\'s recovery."',
    options: ['optimistic', 'pessimistic', 'ambiguous', 'indifferent'],
    correctAnswer: 0,
    explanation: 'In medical contexts, doctors are typically optimistic about recovery when providing hope.',
    cognitiveSkill: 'Contextual Understanding'
  },
  {
    id: 'v5',
    category: 'Verbal Comprehension',
    difficulty: 2,
    question: 'What is the opposite of "Benevolent"?',
    options: ['Kind', 'Malevolent', 'Generous', 'Caring'],
    correctAnswer: 1,
    explanation: 'Benevolent means well-meaning and kind; malevolent means having evil intentions.',
    cognitiveSkill: 'Antonym Recognition'
  },
  {
    id: 'v6',
    category: 'Verbal Comprehension',
    difficulty: 3,
    question: 'If "All cats are mammals" and "Some mammals are pets", which statement must be true?',
    options: ['All cats are pets', 'Some cats are pets', 'No cats are pets', 'Cannot be determined'],
    correctAnswer: 3,
    explanation: 'We cannot determine if any cats are pets from these statements alone.',
    cognitiveSkill: 'Logical Deduction'
  },
  {
    id: 'v7',
    category: 'Verbal Comprehension',
    difficulty: 2,
    question: 'Choose the best word: "The scientist\'s theory was _____ by new evidence."',
    options: ['supported', 'rejected', 'questioned', 'ignored'],
    correctAnswer: 0,
    explanation: 'Evidence typically supports or refutes theories; supported is the most neutral context.',
    cognitiveSkill: 'Semantic Context'
  },
  {
    id: 'v8',
    category: 'Verbal Comprehension',
    difficulty: 4,
    question: 'Which pair expresses a relationship similar to "Author: Book"?',
    options: ['Actor: Movie', 'Director: Film', 'Painter: Canvas', 'Singer: Song'],
    correctAnswer: 3,
    explanation: 'An author creates books; a singer creates songs (direct creative relationship).',
    cognitiveSkill: 'Analogical Reasoning'
  },
  {
    id: 'v9',
    category: 'Verbal Comprehension',
    difficulty: 2,
    question: 'What does "Ubiquitous" mean?',
    options: ['Rare', 'Present everywhere', 'Ancient', 'Complex'],
    correctAnswer: 1,
    explanation: 'Ubiquitous means appearing or found everywhere.',
    cognitiveSkill: 'Vocabulary'
  },
  {
    id: 'v10',
    category: 'Verbal Comprehension',
    difficulty: 3,
    question: 'If "A implies B" and "B is false", what can we conclude?',
    options: ['A is true', 'A is false', 'A might be true or false', 'B implies A'],
    correctAnswer: 1,
    explanation: 'If A implies B and B is false, then A must be false (modus tollens).',
    cognitiveSkill: 'Logical Reasoning'
  },

  // LOGICAL & ABSTRACT REASONING (12 questions)
  {
    id: 'l1',
    category: 'Logical & Abstract Reasoning',
    difficulty: 1,
    question: 'What comes next: 2, 4, 8, 16, ...?',
    options: ['24', '32', '30', '20'],
    correctAnswer: 1,
    explanation: 'Each number doubles the previous one (×2 pattern).',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'l2',
    category: 'Logical & Abstract Reasoning',
    difficulty: 2,
    question: 'Complete: 3, 6, 11, 18, 27, ...?',
    options: ['36', '38', '40', '42'],
    correctAnswer: 1,
    explanation: 'Pattern: +3, +5, +7, +9, +11. Next is +11 = 38.',
    cognitiveSkill: 'Numerical Sequences'
  },
  {
    id: 'l3',
    category: 'Logical & Abstract Reasoning',
    difficulty: 3,
    question: 'If A > B and B > C, which must be true?',
    options: ['C > A', 'A > C', 'B > A', 'C > B'],
    correctAnswer: 1,
    explanation: 'Transitive property: if A > B and B > C, then A > C.',
    cognitiveSkill: 'Logical Deduction'
  },
  {
    id: 'l4',
    category: 'Logical & Abstract Reasoning',
    difficulty: 2,
    question: 'Find the pattern: 1, 4, 9, 16, 25, ...?',
    options: ['30', '35', '36', '49'],
    correctAnswer: 2,
    explanation: 'Perfect squares: 1², 2², 3², 4², 5², so next is 6² = 36.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'l5',
    category: 'Logical & Abstract Reasoning',
    difficulty: 4,
    question: 'If all X are Y, and no Y are Z, which statement is true?',
    options: ['All X are Z', 'No X are Z', 'Some X are Z', 'All Z are X'],
    correctAnswer: 1,
    explanation: 'If X → Y and Y ≠ Z, then X cannot be Z (no X are Z).',
    cognitiveSkill: 'Syllogistic Logic'
  },
  {
    id: 'l6',
    category: 'Logical & Abstract Reasoning',
    difficulty: 2,
    question: 'What comes next: 1, 1, 2, 3, 5, 8, ...?',
    options: ['11', '12', '13', '15'],
    correctAnswer: 2,
    explanation: 'Fibonacci sequence: each number is sum of previous two. 5+8=13.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'l7',
    category: 'Logical & Abstract Reasoning',
    difficulty: 3,
    question: 'If the code for "CAT" is "3120", what is "DOG"?',
    options: ['4157', '3156', '4156', '3165'],
    correctAnswer: 0,
    explanation: 'C=3, A=1, T=20. D=4, O=15, G=7. Position in alphabet.',
    cognitiveSkill: 'Symbolic Reasoning'
  },
  {
    id: 'l8',
    category: 'Logical & Abstract Reasoning',
    difficulty: 4,
    question: 'Complete: 2, 5, 10, 17, 26, ...?',
    options: ['35', '37', '39', '41'],
    correctAnswer: 1,
    explanation: 'Pattern: n² + 1. 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'l9',
    category: 'Logical & Abstract Reasoning',
    difficulty: 2,
    question: 'If "Some A are B" and "All B are C", which must be true?',
    options: ['All A are C', 'Some A are C', 'No A are C', 'All C are A'],
    correctAnswer: 1,
    explanation: 'Some A are B, and all B are C, so some A must be C.',
    cognitiveSkill: 'Logical Deduction'
  },
  {
    id: 'l10',
    category: 'Logical & Abstract Reasoning',
    difficulty: 3,
    question: 'What is the next term: 1, 8, 27, 64, 125, ...?',
    options: ['186', '196', '216', '256'],
    correctAnswer: 2,
    explanation: 'Cubes: 1³, 2³, 3³, 4³, 5³, next is 6³ = 216.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'l11',
    category: 'Logical & Abstract Reasoning',
    difficulty: 4,
    question: 'If A = 1, B = 2, C = 3, what is the value of "LOGIC"?',
    options: ['54', '57', '60', '63'],
    correctAnswer: 1,
    explanation: 'L=12, O=15, G=7, I=9, C=3. Sum = 12+15+7+9+3 = 57.',
    cognitiveSkill: 'Symbolic Reasoning'
  },
  {
    id: 'l12',
    category: 'Logical & Abstract Reasoning',
    difficulty: 5,
    question: 'Find the missing number: 3, 7, 15, 31, 63, ...?',
    options: ['126', '127', '128', '129'],
    correctAnswer: 1,
    explanation: 'Pattern: ×2 + 1. 3×2+1=7, 7×2+1=15, etc. 63×2+1=127.',
    cognitiveSkill: 'Pattern Recognition'
  },

  // SPATIAL VISUALIZATION (10 questions)
  {
    id: 's1',
    category: 'Spatial Visualization',
    difficulty: 1,
    question: 'If you rotate a square 90 degrees clockwise, what shape do you get?',
    options: ['Circle', 'Triangle', 'Square', 'Rectangle'],
    correctAnswer: 2,
    explanation: 'Rotating a square 90 degrees still results in a square.',
    cognitiveSkill: 'Mental Rotation'
  },
  {
    id: 's2',
    category: 'Spatial Visualization',
    difficulty: 2,
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'A hexagon has 6 sides (from Greek "hex" meaning six).',
    cognitiveSkill: 'Shape Recognition'
  },
  {
    id: 's3',
    category: 'Spatial Visualization',
    difficulty: 2,
    question: 'If a cube has 6 faces, how many edges does it have?',
    options: ['8', '10', '12', '14'],
    correctAnswer: 2,
    explanation: 'A cube has 12 edges.',
    cognitiveSkill: '3D Visualization'
  },
  {
    id: 's4',
    category: 'Spatial Visualization',
    difficulty: 3,
    question: 'Which shape has the most sides: Pentagon, Hexagon, or Octagon?',
    options: ['Pentagon', 'Hexagon', 'Octagon', 'All equal'],
    correctAnswer: 2,
    explanation: 'Octagon has 8 sides, hexagon has 6, pentagon has 5.',
    cognitiveSkill: 'Comparison'
  },
  {
    id: 's5',
    category: 'Spatial Visualization',
    difficulty: 3,
    question: 'If you fold a square piece of paper in half twice, how many layers do you have?',
    options: ['2', '3', '4', '8'],
    correctAnswer: 2,
    explanation: 'Each fold doubles layers: 1→2→4 after two folds.',
    cognitiveSkill: 'Spatial Reasoning'
  },
  {
    id: 's6',
    category: 'Spatial Visualization',
    difficulty: 2,
    question: 'What is the sum of interior angles of a triangle?',
    options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
    correctAnswer: 1,
    explanation: 'The sum of interior angles of any triangle is always 180 degrees.',
    cognitiveSkill: 'Geometric Knowledge'
  },
  {
    id: 's7',
    category: 'Spatial Visualization',
    difficulty: 4,
    question: 'If a shape has 8 corners and 12 edges, what 3D shape is it?',
    options: ['Cube', 'Octahedron', 'Dodecahedron', 'Hexagonal Prism'],
    correctAnswer: 1,
    explanation: 'An octahedron has 8 faces, 6 vertices, and 12 edges.',
    cognitiveSkill: '3D Visualization'
  },
  {
    id: 's8',
    category: 'Spatial Visualization',
    difficulty: 3,
    question: 'How many diagonals does a square have?',
    options: ['1', '2', '4', '8'],
    correctAnswer: 1,
    explanation: 'A square has 2 diagonals connecting opposite corners.',
    cognitiveSkill: 'Spatial Analysis'
  },
  {
    id: 's9',
    category: 'Spatial Visualization',
    difficulty: 4,
    question: 'If you rotate the letter "N" 180 degrees, what letter does it resemble?',
    options: ['N', 'Z', 'M', 'W'],
    correctAnswer: 0,
    explanation: 'The letter N rotated 180 degrees still looks like N.',
    cognitiveSkill: 'Mental Rotation'
  },
  {
    id: 's10',
    category: 'Spatial Visualization',
    difficulty: 3,
    question: 'What is the maximum number of right angles in a triangle?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 1,
    explanation: 'A triangle can have at most 1 right angle (right triangle).',
    cognitiveSkill: 'Geometric Reasoning'
  },

  // QUANTITATIVE REASONING (12 questions)
  {
    id: 'q1',
    category: 'Quantitative Reasoning',
    difficulty: 1,
    question: 'What is 15% of 200?',
    options: ['15', '30', '45', '60'],
    correctAnswer: 1,
    explanation: '15% of 200 = 0.15 × 200 = 30.',
    cognitiveSkill: 'Percentage Calculation'
  },
  {
    id: 'q2',
    category: 'Quantitative Reasoning',
    difficulty: 2,
    question: 'If a shirt costs $40 and is on sale for 25% off, what is the sale price?',
    options: ['$10', '$15', '$30', '$35'],
    correctAnswer: 2,
    explanation: '25% of $40 = $10. Sale price = $40 - $10 = $30.',
    cognitiveSkill: 'Applied Arithmetic'
  },
  {
    id: 'q3',
    category: 'Quantitative Reasoning',
    difficulty: 2,
    question: 'What is the next number: 100, 50, 25, 12.5, ...?',
    options: ['6.25', '6.5', '7.5', '8'],
    correctAnswer: 0,
    explanation: 'Each number is half the previous: ÷2 pattern. 12.5 ÷ 2 = 6.25.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'q4',
    category: 'Quantitative Reasoning',
    difficulty: 3,
    question: 'If 3x + 5 = 20, what is the value of x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '3x = 20 - 5 = 15, so x = 15 ÷ 3 = 5.',
    cognitiveSkill: 'Algebraic Solving'
  },
  {
    id: 'q5',
    category: 'Quantitative Reasoning',
    difficulty: 2,
    question: 'What is the average of 10, 20, and 30?',
    options: ['15', '20', '25', '30'],
    correctAnswer: 1,
    explanation: 'Average = (10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20.',
    cognitiveSkill: 'Statistical Calculation'
  },
  {
    id: 'q6',
    category: 'Quantitative Reasoning',
    difficulty: 3,
    question: 'A car travels 60 miles in 1 hour. How long to travel 180 miles?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 2,
    explanation: 'Speed = 60 mph. Time = 180 ÷ 60 = 3 hours.',
    cognitiveSkill: 'Rate Problem'
  },
  {
    id: 'q7',
    category: 'Quantitative Reasoning',
    difficulty: 4,
    question: 'If you invest $100 at 10% simple interest for 2 years, how much interest?',
    options: ['$10', '$20', '$30', '$40'],
    correctAnswer: 1,
    explanation: 'Simple interest = Principal × Rate × Time = $100 × 0.10 × 2 = $20.',
    cognitiveSkill: 'Financial Math'
  },
  {
    id: 'q8',
    category: 'Quantitative Reasoning',
    difficulty: 3,
    question: 'What is 2³ + 3²?',
    options: ['12', '15', '17', '18'],
    correctAnswer: 2,
    explanation: '2³ = 8, 3² = 9. 8 + 9 = 17.',
    cognitiveSkill: 'Order of Operations'
  },
  {
    id: 'q9',
    category: 'Quantitative Reasoning',
    difficulty: 4,
    question: 'If 5 workers can complete a job in 10 days, how many days for 10 workers?',
    options: ['2 days', '4 days', '5 days', '8 days'],
    correctAnswer: 2,
    explanation: 'Inverse proportion: 5 × 10 = 10 × x, so x = 5 days.',
    cognitiveSkill: 'Work Problem'
  },
  {
    id: 'q10',
    category: 'Quantitative Reasoning',
    difficulty: 3,
    question: 'What is the area of a rectangle with length 8 and width 5?',
    options: ['13', '26', '40', '80'],
    correctAnswer: 2,
    explanation: 'Area = length × width = 8 × 5 = 40.',
    cognitiveSkill: 'Geometry'
  },
  {
    id: 'q11',
    category: 'Quantitative Reasoning',
    difficulty: 4,
    question: 'If a number is increased by 20% and then decreased by 20%, what is the net change?',
    options: ['0%', '-4%', '+4%', '-2%'],
    correctAnswer: 1,
    explanation: 'Start with 100. +20% = 120. -20% of 120 = 24. Final = 96. Net change = -4%.',
    cognitiveSkill: 'Percentage Reasoning'
  },
  {
    id: 'q12',
    category: 'Quantitative Reasoning',
    difficulty: 5,
    question: 'Solve: 2x + 3 = 5x - 9',
    options: ['2', '3', '4', '6'],
    correctAnswer: 2,
    explanation: '2x - 5x = -9 - 3, -3x = -12, x = 4.',
    cognitiveSkill: 'Algebraic Solving'
  },

  // WORKING MEMORY & PERCEPTUAL REASONING (10 questions)
  {
    id: 'w1',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 1,
    question: 'Remember this sequence: 7, 3, 9, 1. What is the third number?',
    options: ['7', '3', '9', '1'],
    correctAnswer: 2,
    explanation: 'The sequence is 7 (1st), 3 (2nd), 9 (3rd), 1 (4th). Third is 9.',
    cognitiveSkill: 'Sequential Memory'
  },
  {
    id: 'w2',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 2,
    question: 'Reverse the digits of 472.',
    options: ['274', '247', '742', '427'],
    correctAnswer: 0,
    explanation: '472 reversed is 274.',
    cognitiveSkill: 'Mental Manipulation'
  },
  {
    id: 'w3',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 2,
    question: 'Which number is different: 2, 4, 6, 9, 10?',
    options: ['2', '6', '9', '10'],
    correctAnswer: 2,
    explanation: '9 is the only odd number; all others are even.',
    cognitiveSkill: 'Pattern Recognition'
  },
  {
    id: 'w4',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 3,
    question: 'If A=1, B=2, C=3, what letter comes after the 5th letter?',
    options: ['E', 'F', 'G', 'H'],
    correctAnswer: 1,
    explanation: '5th letter is E. Letter after E is F (6th letter).',
    cognitiveSkill: 'Symbolic Memory'
  },
  {
    id: 'w5',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 3,
    question: 'Remember: Triangle, Circle, Square. Which shape comes second?',
    options: ['Triangle', 'Circle', 'Square', 'None'],
    correctAnswer: 1,
    explanation: 'Sequence: Triangle (1st), Circle (2nd), Square (3rd).',
    cognitiveSkill: 'Sequential Memory'
  },
  {
    id: 'w6',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 2,
    question: 'What is 8 + 7 × 2?',
    options: ['15', '22', '30', '32'],
    correctAnswer: 1,
    explanation: 'Order of operations: 7 × 2 = 14, then 8 + 14 = 22.',
    cognitiveSkill: 'Working Memory'
  },
  {
    id: 'w7',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 4,
    question: 'Reverse "BRAIN" and then take every other letter.',
    options: ['NI', 'AR', 'IA', 'RN'],
    correctAnswer: 0,
    explanation: 'BRAIN reversed is NIARB. Every other letter: N, I = NI.',
    cognitiveSkill: 'Complex Manipulation'
  },
  {
    id: 'w8',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 3,
    question: 'If you add 5 to a number and then subtract 3, you get 12. What is the number?',
    options: ['8', '10', '14', '15'],
    correctAnswer: 1,
    explanation: 'x + 5 - 3 = 12, x + 2 = 12, x = 10.',
    cognitiveSkill: 'Reverse Operations'
  },
  {
    id: 'w9',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 4,
    question: 'Which pattern completes: A, C, E, G, ...?',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 1,
    explanation: 'Every other letter: A(1), C(3), E(5), G(7), next is I(9).',
    cognitiveSkill: 'Pattern Completion'
  },
  {
    id: 'w10',
    category: 'Working Memory & Perceptual Reasoning',
    difficulty: 3,
    question: 'Remember: 5, 2, 8, 1, 9. What is the sum of the first and last numbers?',
    options: ['10', '12', '14', '17'],
    correctAnswer: 2,
    explanation: 'First = 5, last = 9. Sum = 5 + 9 = 14.',
    cognitiveSkill: 'Working Memory'
  },
];

// Category configuration
export const CATEGORIES = [
  'Verbal Comprehension',
  'Logical & Abstract Reasoning',
  'Spatial Visualization',
  'Quantitative Reasoning',
  'Working Memory & Perceptual Reasoning'
];

// Difficulty levels
export const DIFFICULTY_LEVELS = [1, 2, 3, 4, 5];
