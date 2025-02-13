import styles from './Display.module.css';

function Display() {
  return (
    <div className={styles.display}>
      <input
        className={styles.expression}
        autoFocus
        type='text'
        id='expression'
      />
    </div>
  );
}

export default Display;
