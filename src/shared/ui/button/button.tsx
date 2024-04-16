import { PropsWithChildren } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'passive';
};

export const Button = ({
  onClick,
  variant = 'primary',
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};
