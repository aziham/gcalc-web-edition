import styles from './PhoneFrame.module.css';

function PhoneFrame({ children }) {
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.notch}>
        <div className={styles.speaker}></div>
        <div className={styles.sensor}></div>
      </div>
      {children}
    </div>
  );
}

export default PhoneFrame;
