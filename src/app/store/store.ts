import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import test from '@features/test/model/testSlice';

//@ts-ignore
const localStorageMiddleware = ({ getState }) => {
  //@ts-ignore
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    //@ts-ignore
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: { test },
  preloadedState: reHydrateStore(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
