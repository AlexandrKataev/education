import { Badge, ProgressBar } from '@shared/ui';
import styles from './test.module.css';
import { Question } from '@entities/question';
import { useAppSelector } from '@app/store/store';

export const Test = () => {
  const currentStep = useAppSelector((state) => state.test.current);
  const question = useAppSelector((state) => state.test.test.questions)[currentStep];
  const steps = useAppSelector((state) => state.test.test.questions).length;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Тестирование</h1>
        <Badge variant="secondary">16:56</Badge>
      </div>
      <ProgressBar current={currentStep} steps={steps} />
      <Question question={question} />
    </div>
  );
};
