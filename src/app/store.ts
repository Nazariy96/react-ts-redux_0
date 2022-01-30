import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../redux/_posts/_reducer/postsReducer';

export const store = configureStore({
  reducer: {
    postReducer:postsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
