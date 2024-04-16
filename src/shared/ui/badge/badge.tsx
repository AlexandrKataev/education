import { PropsWithChildren } from 'react';
import styles from './badge.module.css';

type BadgeProps = {
  variant: 'primary' | 'secondary' | 'passive';
};

export const Badge = ({ variant = 'primary', children }: PropsWithChildren<BadgeProps>) => {
  return <div className={styles[variant]}>{children}</div>;
};
