import styles from './checkbox.module.css';

type CheckboxProps = {
  title: string;
  value: string | number;
  isChecked: boolean;
  onClick: () => void;
};

export const Checkbox = ({ title, value, isChecked = false, onClick }: CheckboxProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={isChecked ? styles['checkbox-checked'] : styles.checkbox} />
      <label>{title}</label>
    </div>
  );
};
