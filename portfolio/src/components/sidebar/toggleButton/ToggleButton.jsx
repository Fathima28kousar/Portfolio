// ToggleButton.jsx
import styles from './Toggle.module.css';

const ToggleButton = ({setOpen}) => {
  return (
    <button className={styles.button} onClick={() => setOpen((prev) => !prev)}>
      <div className={`${styles.line} `} />
      <div className={`${styles.line} `} />
      <div className={`${styles.line} `} />
      {/* <div>
      <div className={`${styles.slantLine1} `} />
      <div className={`${styles.slantLine2} `} />
      </div> */}
      

    </button>
  );
};

export default ToggleButton;
