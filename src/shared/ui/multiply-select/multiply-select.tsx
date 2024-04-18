import styles from './multiply-select.module.css';

import { useState } from 'react';
import { Checkbox } from '../checkbox';

type MultiplySelectProps = {
  variants: string[];
  onChange: (value: string[]) => void;
};

export const MultiplySelect = ({ variants, onChange }: MultiplySelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onClick = (value: string) => {
    if (selected.some((el) => el === value)) {
      const filtered = [...selected.filter((el) => el !== value)];
      setSelected(filtered);
      onChange(filtered);
      return;
    }
    onChange([...selected, value]);
    setSelected((state) => [...state, value]);
  };
  return (
    <div className={styles.container}>
      {variants.map((variant) => {
        return (
          <Checkbox
            onClick={() => onClick(variant)}
            title={variant || ''}
            value={variant}
            isChecked={selected.some((el) => el === variant)}
            key={variant}
          />
        );
      })}
    </div>
  );
};
