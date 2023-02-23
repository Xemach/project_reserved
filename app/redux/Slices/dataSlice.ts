import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Detail } from '../../lib/types';

interface InfoCount {
  countFreeRooms: number;
  countFreeSeats: number;
}

export interface DataState {
  meetingRooms: Detail[] | undefined;
  tables: Detail[] | undefined;
  infoCountTablesAndRooms: InfoCount | undefined;
}

const initialState = {
  meetingRooms: undefined,
  tables: undefined,
  infoCountTablesAndRooms: undefined,
} as DataState;

const dataSlice = createSlice({
  name: 'dataState',
  initialState,
  reducers: {
    setMeetingRooms: (state, action: PayloadAction<Detail[]>) => {
      state.meetingRooms = action.payload;
    },
    setTables: (state, action: PayloadAction<Detail[]>) => {
      state.tables = action.payload;
    },
    setInfoCount: (state, action: PayloadAction<InfoCount>) => {
      state.infoCountTablesAndRooms = action.payload;
    },
  },
});

export const { setMeetingRooms, setTables, setInfoCount } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
