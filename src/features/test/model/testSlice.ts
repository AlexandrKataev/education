import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import test from '@shared/data/test.json';
import { Answer, Test } from './types';

export interface TestState {
  test: Test;
  current: number;
  status: 'pending' | 'started' | 'completed' | 'timeout';
  answers: Answer[];
}

const initialState: TestState = {
  test: test as Test,
  current: 0,
  status: 'pending',
  answers: [],
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    answer: (state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
      state.current += 1;
    },
    start: (state) => {
      state.status = 'started';
      state.current = 0;
    },
    complete: (state) => {
      state.status = 'completed';
    },
    timeout: (state) => {
      state.status = 'timeout';
    },
  },
});

// Action creators are generated for each case reducer function
export const { answer, start, complete, timeout } = testSlice.actions;

export default testSlice.reducer;
