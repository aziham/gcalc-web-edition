import styles from './Calculator.module.css';

import Display from '../Display';
import Keypad from '../Keypad';

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Keypad />
    </div>
  );
}

export default Calculator;
