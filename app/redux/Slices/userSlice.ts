import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../lib/types';

const initialState = { user: undefined } as { user: User | undefined };

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
