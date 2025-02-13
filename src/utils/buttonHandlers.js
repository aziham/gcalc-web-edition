import calculate from './calculate';

const operators = ['%', '÷', '×', '-', '+'];
const openParenthesis = '(';
const closeParenthesis = ')';
const decimalPoint = '.';
let openParenthesisCounter = 0;

export const handleButtonClick = (value, setExpression) => {
  setExpression((prev) => {
    let newExpression = prev.trim();
    const lastChar = newExpression.slice(-1);

    switch (value) {
      case 'AC': // Clear
        openParenthesisCounter = 0;
        return '';

      case 'delete': // Delete last character
        if (lastChar === openParenthesis) openParenthesisCounter--;
        if (lastChar === closeParenthesis) openParenthesisCounter++;
        return newExpression.slice(0, -1);

      case '=': // Evaluate Expression
        try {
          return calculate(newExpression).toString();
        } catch {
          return 'Error';
        }

      case '•': // Decimal Point
        return handleDecimalPoint(newExpression);

      case '( )': // Parentheses
        return handleParentheses(newExpression);

      default:
        if (operators.includes(value)) {
          return handleOperator(value, newExpression);
        }
        return newExpression + value; // Append numbers & valid characters
    }
  });
};

// 🟢 **Handle Decimal Point**
const handleDecimalPoint = (expression) => {
  const tokens = expression.split(/[+\-÷×]/);
  const lastToken = tokens[tokens.length - 1];

  if (
    lastToken.includes(decimalPoint) ||
    lastToken.slice(-1) === closeParenthesis
  ) {
    return expression; // Avoid duplicate decimals
  }
  return expression + decimalPoint;
};

// 🟢 **Handle Parentheses**
const handleParentheses = (expression) => {
  const lastChar = expression.slice(-1);

  if (
    expression === '' ||
    operators.includes(lastChar) ||
    lastChar === openParenthesis
  ) {
    openParenthesisCounter++;
    return expression + openParenthesis;
  } else if (openParenthesisCounter > 0) {
    openParenthesisCounter--;
    return expression + closeParenthesis;
  }
  return expression;
};

// 🟢 **Handle Operators**
const handleOperator = (operator, expression) => {
  const lastChar = expression.slice(-1);

  if (lastChar === decimalPoint) return expression;
  if (expression === '' || lastChar === openParenthesis) return expression;
  if (
    (operators.includes(lastChar) && lastChar !== '%') ||
    (lastChar === '%' && operator === '%')
  ) {
    return expression.slice(0, -1) + operator; // Replace operator
  }
  return expression + operator;
};
