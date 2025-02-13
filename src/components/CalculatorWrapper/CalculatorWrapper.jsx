import styles from './CalculatorWrapper.module.css';

import Display from '../Display';
import Keypad from '../Keypad';

function CalculatorWrapper() {
  return (
    <div className={styles.calculatorWrapper}>
      <Display />
      <Keypad />
    </div>
  );
}

export default CalculatorWrapper;
