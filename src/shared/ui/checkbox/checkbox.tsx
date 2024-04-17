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
      <input type="checkbox" value={value} checked={isChecked} />
      <label>{title}</label>
    </div>
  );
};
