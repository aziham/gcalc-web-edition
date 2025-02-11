# Google-Inspired Web Calculator

A web-based calculator inspired by Google’s Android calculator, built with HTML, CSS, and JavaScript. This project was a deep dive into not just UI replication but also crafting a robust mathematical engine that can handle complex expressions accurately.

## Why I Built This?

I've always admired the simplicity and efficiency of Google’s calculator, but I wanted to take on the challenge of recreating it from scratch. This meant not only designing an intuitive UI but also implementing a reliable way to process mathematical expressions—including parentheses, operator precedence, and even percentage calculations.

## Features

- **Basic Arithmetic** – Addition, subtraction, multiplication, and division.
- **Advanced Operations** – Percentage handling with custom logic to address different use cases.
- **Parentheses Support** – Solve complex expressions like `(5 + 2) × 3` without issues.
- **Accurate Computation** – Uses the Shunting Yard Algorithm and Reverse Polish Notation (RPN) for precise evaluations.
- **Decimal Precision** – Avoids floating-point errors common in JavaScript calculations.
- **Sleek UI** – A close match to the Google calculator interface.
- **Smooth Interactions** – Button animations and hover effects for an improved experience.

## Reference Screenshot

To ensure accuracy in replicating the design, I used a reference screenshot from Google’s Android calculator:

<img src="./g-calc-reference.png" alt="Google Calculator Reference" width="300" />

## How It Works

### 1. Tokenization

First, the input expression is broken down into smaller components (numbers, operators, parentheses) using a tokenizer. This makes it easier to parse and process complex expressions correctly.

### 2. Parsing with the Shunting Yard Algorithm

Since mathematical expressions are typically written in infix notation (e.g., `3 + 4 × 2`), I needed a way to ensure that operations follow the correct precedence. I implemented the **Shunting Yard Algorithm**, which converts infix notation into postfix notation (RPN) for easier evaluation.

### 3. Evaluation with Reverse Polish Notation (RPN)

The RPN expression is then evaluated using a stack-based approach. This method eliminates the need for multiple nested operations and ensures calculations are processed efficiently and accurately.

### 4. Handling Percentages

One of the trickier parts was implementing percentage calculations. Unlike simple multiplication, percentages need to adapt based on their context:

- `50 + 20%` should be interpreted as `50 + (50 × 0.2)`
- `50 × 20%` should be `50 × 0.2`
  Solving this required custom logic to handle different cases correctly.

## Challenges & Lessons Learned

### Algorithmic Complexity

Before starting this project, I underestimated how tricky it would be to parse and evaluate mathematical expressions correctly. Learning and implementing the **Shunting Yard Algorithm** and **RPN evaluation** was a huge learning curve but extremely rewarding.

### UI & Usability

While getting the logic to work was one thing, making the UI feel natural and responsive was another. Ensuring buttons had the right spacing, animations were smooth, and the experience felt intuitive took a lot of trial and error.

### JavaScript Quirks

JavaScript isn’t the most reliable when it comes to floating-point arithmetic. I had to add custom rounding methods to prevent issues like `0.1 + 0.2` resulting in `0.30000000000000004` instead of `0.3`.

## Running the Project

To get started with the project, follow these steps:

- Clone the repository
```bash
git clone https://github.com/aziham/gcalc-web-edition.git
```

- Navigate into the project directory
```bash
cd gcalc-web-edition
```

- No additional setup is required; just open index.html, and the calculator will be ready to use.

---

This project was more than just about making a calculator — it was a deep dive into algorithms, UI/UX, and problem-solving.
It pushed me to refine my skills and understand the nuances of handling complex user input.
I'm proud of what I built, and I hope you find it useful!
