import { ChangeEvent, useLayoutEffect, useRef } from 'react';
import styles from './textarea.module.css';

type TextareaProps = {
  value: string;
  onChange: (value: string) => void;
};

const MIN_TEXTAREA_HEIGHT = 70;

export const Textarea = ({ value, onChange }: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'inherit';
      ref.current.style.height = `${Math.max(ref.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
    }
  }, [value]);
  return (
    <textarea
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: 'none',
      }}
      ref={ref}
      className={styles.input}
      value={value}
      onChange={onChangeInput}
    />
  );
};
