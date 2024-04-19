import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import test from '@features/test/model/testSlice';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Ошибка загрузки стейта из localStotage:', err);
    return undefined;
  }
};

const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Ошибка сохранения стейта в localStorage:', err);
  }
};

const cleartLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.error('Ошибка очистки localStorage:', err);
  }
};

const initialState = loadStateFromLocalStorage();

const store = configureStore({
  preloadedState: initialState,
  //@ts-ignore
  reducer: { test },
});

store.subscribe(() => {
  const state = store.getState();
  if (state.test.status === 'completed' || state.test.status === 'timeout') {
    cleartLocalStorage();
    return;
  }
  saveStateToLocalStorage(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
