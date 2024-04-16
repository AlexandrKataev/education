import { Question } from 'src/entities/question/model/types';

export interface Test {
  minutes: number;
  questions: Question[];
}

export interface Answer {
  questionId: number;
  answer: string;
}
