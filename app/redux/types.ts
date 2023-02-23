import { Action, ThunkAction } from '@reduxjs/toolkit';
import { User } from '../lib/types';
import { DataState } from './Slices/dataSlice';

export interface GlobalState {
  user: { user: User };
  data: DataState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  Action<string>
>;
