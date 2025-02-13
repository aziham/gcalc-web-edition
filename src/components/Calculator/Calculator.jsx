import { useState } from 'react';

import styles from './Calculator.module.css';

import Display from '../Display';
import Keypad from '../Keypad';

function Calculator() {
  const [expression, setExpression] = useState('');

  return (
    <div className={styles.calculator}>
      <Display expression={expression} setExpression={setExpression} />
      <Keypad setExpression={setExpression} />
    </div>
  );
}

export default Calculator;
