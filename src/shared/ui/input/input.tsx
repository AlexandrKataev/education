import { ChangeEvent } from 'react';
import styles from './input.module.css';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return <input className={styles.input} type="text" value={value} onChange={onChangeInput} />;
};
