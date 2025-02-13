import styles from './Button.module.css';

function Button({ type, icon: Icon, children, ...delegated }) {
  const className = `${styles.button} ${styles[type]}`;
  return (
    <button className={className} {...delegated}>
      {Icon ? <Icon size='32' strokeWidth='1.7' /> : children}
    </button>
  );
}

export default Button;
