import { useState } from 'react';

import { useAppDispatch } from '@app/store/store';
import { Answer } from '@features/test/model/types';
import { Button, Textarea, SingleSelect, MultiplySelect, Input } from '@shared/ui';

import { Question as IQuestion } from './model/types';
import { answer } from '@features/test/model/testSlice';

type QuestionProps = {
  question: IQuestion;
};

export const Question = ({ question }: QuestionProps) => {
  const dispatch = useAppDispatch();

  const [answerDto, setAnswerDto] = useState<Answer | null>(null);

  const onClickAnswer = () => {
    answerDto?.answer.length && dispatch(answer(answerDto));
    setAnswerDto(null);
  };

  const onChangeAnswer = (value: string | string[]) => {
    setAnswerDto({ questionId: question.id, answer: value });
  };

  return (
    <>
      <h2>{question.title}</h2>

      {/* {AnswerType[question.type]} */}
      {question.type === 'singleSelect' && (
        <SingleSelect variants={question.variants as string[]} onChange={onChangeAnswer} />
      )}
      {question.type === 'multiplySelect' && (
        <MultiplySelect variants={question.variants as string[]} onChange={onChangeAnswer} />
      )}
      {question.type === 'shortAnswer' && (
        <Input onChange={onChangeAnswer} value={(answerDto?.answer as string) || ''} />
      )}
      {question.type === 'longAnswer' && (
        <Textarea onChange={onChangeAnswer} value={(answerDto?.answer as string) || ''} />
      )}
      <Button variant={answerDto?.answer.length ? 'primary' : 'passive'} onClick={onClickAnswer}>
        Ответить
      </Button>
    </>
  );
};
