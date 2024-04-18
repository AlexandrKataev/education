import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import test from '@features/test/model/testSlice';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; // Если нет сохраненного состояния, возвращаем undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

// Функция для сохранения состояния в LocalStorage
const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

const initialState = loadStateFromLocalStorage();

const store = configureStore({
  preloadedState: initialState,
  reducer: { test },
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
