import styles from './Display.module.css';

function Display({ expression, setExpression }) {
  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  return (
    <div className={styles.display}>
      <input
        className={styles.expression}
        autoFocus
        type='text'
        id='expression'
        value={expression}
        onChange={handleChange}
      />
    </div>
  );
}

export default Display;
