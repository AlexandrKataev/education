import styles from './App.module.css';

import { Button, ProgressBar, Badge, Radio } from '@shared/ui';
import { useAppDispatch, useAppSelector } from './store/store';
import { answer } from '@features/test/model/testSlice';
import { useState } from 'react';
import { Answer } from '@features/test/model/types';

function App() {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.test.current);
  const question = useAppSelector((state) => state.test.test.questions)[currentStep];
  const steps = useAppSelector((state) => state.test.test.questions).length;

  const [answerDto, setAnswerDto] = useState<Answer | null>(null);

  const onAnswer = () => {
    answerDto && dispatch(answer(answerDto));
    setAnswerDto(null);
  };

  const onChange = (answerDto: Answer) => {
    setAnswerDto({ questionId: question.id, answer: answerDto.answer || '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Тестирование</h1>
        <Badge variant="secondary">16:56</Badge>
      </div>
      <ProgressBar current={currentStep} steps={steps} />
<Question>
      <Button onClick={onAnswer}>Ответить</Button>
    </div>
  );
}

export default App;
