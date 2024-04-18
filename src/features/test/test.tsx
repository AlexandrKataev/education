import { Button, ProgressBar } from '@shared/ui';
import styles from './test.module.css';
import { Question } from '@entities/question';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import Timer from '@features/timer/timer';
import { start } from './model/testSlice';

export const Test = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.test.current);
  const question = useAppSelector((state) => state.test.test.questions)[currentStep];
  const steps = useAppSelector((state) => state.test.test.questions).length;
  const testDuration = useAppSelector((state) => state.test.test.minutes);
  const status = useAppSelector((state) => state.test.status);

  const onStart = () => {
    dispatch(start(testDuration));
  };

  return (
    <div className={styles.container}>
      {status === 'pending' && <Button onClick={onStart}>Начать тест</Button>}
      {status === 'started' && (
        <div className={styles.answer}>
          <div className={styles.title}>
            <h1>Тестирование</h1>
            <Timer />
          </div>
          <ProgressBar current={currentStep} steps={steps} />
          <Question question={question} />
        </div>
      )}
      {status === 'completed' && (
        <>
          <div>Тест завершен</div>
          <Button onClick={onStart}>Пройти заново</Button>
        </>
      )}
      {status === 'timeout' && (
        <>
          <div>Время вышло, вы можете попробовать еще:</div>
          <Button onClick={onStart}>Пройти заново</Button>
        </>
      )}
    </div>
  );
};
