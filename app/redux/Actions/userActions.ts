import { AppThunk } from '../types';
import api from '../../api/api';
import { setUserData } from '../Slices/userSlice';
import { RegisterPost } from '../../lib/types';
import { Alert } from 'react-native';
import { LoginSchema } from '../../lib/validation/loginShema';
import { parseUser } from '../../lib/parsers/parseUser';

export const login =
  (data: LoginSchema): AppThunk =>
  async dispatch => {
    try {
      const res = await api.userApi.login(data.email, data.password);
      if (res.ok) {
        dispatch(
          setUserData(
            parseUser(res.response.data.data, res.response.data.access_token),
          ),
        );
        return;
      }
      console.log(res);
      Alert.alert('', res.statusText);
    } catch (e) {
      console.log(e);
    }
  };

export const register =
  (data: RegisterPost): AppThunk =>
  async dispatch => {
    try {
      console.log(data);
      const res = await api.userApi.register(data);
      if (res.ok) {
        dispatch(
          setUserData({
            ...res.response.data.data,
            token: res.response.data.access_token,
          }),
        );
        return;
      }
      Alert.alert('', res.statusText);
    } catch (e) {
      console.log(e);
    }
  };
