import { Delete } from 'lucide-react';

import styles from './Keypad.module.css';

import Button from '../Button';

function Keypad() {
  return (
    <div className={styles.keypad}>
      <Button type='clear'>AC</Button>
      <Button type='parentheses'>( )</Button>
      <Button type='operator'>%</Button>
      <Button type='operator'>÷</Button>
      <Button type='digit'>7</Button>
      <Button type='digit'>8</Button>
      <Button type='digit'>9</Button>
      <Button type='operator'>×</Button>
      <Button type='digit'>4</Button>
      <Button type='digit'>5</Button>
      <Button type='digit'>6</Button>
      <Button type='operator'>-</Button>
      <Button type='digit'>1</Button>
      <Button type='digit'>2</Button>
      <Button type='digit'>3</Button>
      <Button type='operator'>+</Button>
      <Button type='digit'>0</Button>
      <Button type='dicimalPoint'>•</Button>
      <Button type='delete' icon={Delete} />
      <Button type='equals'>=</Button>
    </div>
  );
}

export default Keypad;
