import { useEffect, useState } from 'react';
import styles from './single-select.module.css';
import { Radio } from '@shared/ui';

type SingleSelectProps = {
  variants: string[];
  onChange: (value: string) => void;
};

export const SingleSelect = ({ variants, onChange }: SingleSelectProps) => {
  const [selected, setSelected] = useState<null | number>(null);

  useEffect(() => {
    setSelected(null);
  }, [variants]);

  const onClick = (value: string, i: number) => {
    setSelected(i);
    onChange(value);
  };
  return (
    <div className={styles.container}>
      {variants.map((variant, i) => {
        return (
          <Radio
            onClick={() => onClick(variant, i)}
            title={variant || ''}
            value={i}
            isChecked={selected === i}
            key={variant}
          />
        );
      })}
    </div>
  );
};
