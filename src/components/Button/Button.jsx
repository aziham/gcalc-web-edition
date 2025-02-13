import styles from './Button.module.css';

function Button({ type, icon: Icon, children }) {
  const className = `${styles.button} ${styles[type]}`;
  return (
    <button className={className}>
      {children || <Icon size='32' strokeWidth='1.7' />}
    </button>
  );
}

export default Button;
