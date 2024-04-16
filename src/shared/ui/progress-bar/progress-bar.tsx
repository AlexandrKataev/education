import styles from './progress-bar.module.css';

type ProgressBarProps = {
  current: number;
  steps: number;
};

const itemStyle = (step: number, currentStep: number) => {
  if (step === currentStep) {
    return 'current';
  }
  if (step > currentStep) {
    return 'passive';
  }
  return 'done';
};

export const ProgressBar = ({ current, steps }: ProgressBarProps) => {
  return (
    <div className={styles.container}>
      {[...Array(steps).keys()].map((step, i) => {
        return <div key={i} className={styles[itemStyle(step, current)]}></div>;
      })}
    </div>
  );
};
