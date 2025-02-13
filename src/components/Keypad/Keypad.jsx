import styles from './Keypad.module.css';
import { buttonsMap } from '../../utils/constants';
import { handleButtonClick } from '../../utils/buttonHandlers';
import Button from '../Button/Button';

function Keypad({ setExpression }) {
  return (
    <div className={styles.keypad}>
      {buttonsMap.map(({ value, type, icon }) => (
        <Button
          key={value}
          type={type}
          icon={icon}
          onClick={() => handleButtonClick(value, setExpression)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default Keypad;
