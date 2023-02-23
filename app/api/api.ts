import { Detail, RegisterPost, User } from '../lib/types';
import client from './client';

interface ApiRegister {
  email: string;
  password: string;
}

interface ApiUser {
  access_token: string;
  data: User;
}

const getAuthHeader = (token: string) => {
  return { 'Authorization': `bearer ${token}` };
};

const InfoApi = {
  getInfo: (token: string) =>
    client.get<{ countFreeRooms: number; countFreeSeats: number }>(
      '/info-free',
      { headers: getAuthHeader(token) },
    ),
};

const userApi = {
  login: (email: string, password: string) =>
    client.post<ApiRegister, ApiUser>('/auth/login', {
      email,
      password,
    }),
  register: (data: RegisterPost) =>
    client.post<RegisterPost, ApiUser>('/auth/register', data),
};

const MeetingRoomsApi = {
  getMeetingRooms: (token: string) =>
    client.get<Detail[]>('meeting-rooms', {
      headers: getAuthHeader(token),
    }),
  getUniqueRoom: (token: string, id: number) =>
    client.get<Detail>(`meeting-rooms/${id}`, {
      headers: getAuthHeader(token),
    }),
};

const TablesApi = {
  getTables: (token: string) =>
    client.get<Detail[]>('table', {
      headers: getAuthHeader(token),
    }),
  getUniqueTable: (token: string, id: number) =>
    client.get<Detail>(`table/${id}`, {
      headers: getAuthHeader(token),
    }),
};

const api = { userApi, MeetingRoomsApi, TablesApi, InfoApi };

export default api;
