import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import test from '@shared/data/test.json';
import { Answer, Test } from './types';
import dayjs, { Dayjs } from 'dayjs';

export interface TestState {
  test: Test;
  current: number;
  status: 'pending' | 'started' | 'completed' | 'timeout';
  answers: Answer[];
  endTime: string | null;
}

const initialState: TestState = {
  test: test as Test,
  current: 0,
  status: 'pending',
  answers: [],
  endTime: null,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    answer: (state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
      if (state.test.questions.length <= state.current + 1) {
        state.status = 'completed';
        state.endTime = null;
      } else {
        state.current += 1;
      }
    },
    start: (state, action: PayloadAction<number>) => {
      state.status = 'started';
      state.current = 0;
      state.endTime = dayjs().add(action.payload, 'minutes').format();
    },
    complete: (state) => {
      state.status = 'completed';
      state.endTime = null;
    },
    timeout: (state) => {
      state.status = 'timeout';
      state.endTime = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { answer, start, complete, timeout } = testSlice.actions;

export default testSlice.reducer;
