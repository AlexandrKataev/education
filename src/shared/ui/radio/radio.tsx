import styles from './radio.module.css';

type RadioProps = {
  title: string;
  value: string | number;
  isChecked: boolean;
  onClick: () => void;
};

export const Radio = ({ title, value, isChecked = false, onClick }: RadioProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <input type="radio" value={value} checked={isChecked} onChange={() => {}} />
      <label>{title}</label>
    </div>
  );
};
