import { AppThunk } from '../types';
import {
  getInfoCountRoomsAndSeats,
  getMeetingRooms,
  getTables,
} from './dataActions';

export const init = (): AppThunk => dispatch => {
  dispatch(getMeetingRooms());
  dispatch(getTables());
  dispatch(getInfoCountRoomsAndSeats());
};
