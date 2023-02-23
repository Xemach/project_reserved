import { AppThunk } from '../types';
import api from '../../api/api';
import { Alert } from 'react-native';
import { setInfoCount, setMeetingRooms, setTables } from '../Slices/dataSlice';
import { Detail } from '../../lib/types';

export const getMeetingRooms = (): AppThunk => async (dispatch, getState) => {
  try {
    const token = getState().user.user.token;
    const res = await api.MeetingRoomsApi.getMeetingRooms(token);
    if (res.ok) {
      dispatch(setMeetingRooms(res.response.data));
      return;
    }
    Alert.alert('', res.statusText);
  } catch (e) {
    console.log(e);
  }
};

export const getTables = (): AppThunk => async (dispatch, getState) => {
  try {
    const token = getState().user.user.token;
    const res = await api.TablesApi.getTables(token);
    if (res.ok) {
      dispatch(setTables(res.response.data));
      return;
    }
    Alert.alert('', res.statusText);
  } catch (e) {
    console.log(e);
  }
};

export const getDetailItem =
  (id: number, type: string): AppThunk<Promise<Detail | null | undefined>> =>
  async (dispatch, getState) => {
    console.log('1', type);
    try {
      const token = getState().user.user.token;
      let res = null;
      if (type === 'room') {
        res = await api.MeetingRoomsApi.getUniqueRoom(token, id);
      }
      if (type === 'table') {
        console.log('2');
        res = await api.TablesApi.getUniqueTable(token, id);
      }
      if (res?.ok) {
        console.log(res?.response, 'response');
        return res?.response.data;
      }
    } catch (e) {
      return null;
    }
  };

export const getInfoCountRoomsAndSeats =
  (): AppThunk => async (dispatch, getState) => {
    try {
      const token = getState().user.user.token;
      const res = await api.InfoApi.getInfo(token);
      if (res.ok) {
        console.log(res.response.data);
        dispatch(setInfoCount(res.response.data));
      }
    } catch (e) {
      return null;
    }
  };
