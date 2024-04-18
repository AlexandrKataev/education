import { CheckIcon } from '../icons/check-icon';
import styles from './checkbox.module.css';

type CheckboxProps = {
  title: string;
  value: string | number;
  isChecked: boolean;
  onClick: () => void;
};

export const Checkbox = ({ title, isChecked = false, onClick }: CheckboxProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.checkbox}>
        {isChecked && <CheckIcon width={'20x'} height={'20px'} stroke={'#b92a35'} />}
      </div>

      <label>{title}</label>
    </div>
  );
};
