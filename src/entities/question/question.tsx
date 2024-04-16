import { Radio } from '@shared/ui';
import styles from './question.module.scss';
import { Question as QuestionType } from './model/types';
import { Answer } from '@features/test/model/types';

type QuestionProps = {
  question: QuestionType;
  onClick: (AnswerDto: Answer) => void;
};

export const Question = ({ question, onClick }: QuestionProps) => {
  return (
    <>
      <h2>{question.title}</h2>

      {question.type === 'singleSelect' && (
        <div className={styles.variants}>
          {question.variants.map((variant, i) => {
            return (
              <Radio
                onClick={onClick}
                title={variant || ''}
                value={i}
                isChecked={answerDto?.answer === variant && true}
                key={variant}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
