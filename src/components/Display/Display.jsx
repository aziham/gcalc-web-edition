import { useState } from 'react';

import styles from './Display.module.css';

function Display() {
  const [expression, setExpression] = useState('');

  return (
    <div className={styles.display}>
      <input
        className={styles.expression}
        autoFocus
        type='text'
        id='expression'
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
    </div>
  );
}

export default Display;
