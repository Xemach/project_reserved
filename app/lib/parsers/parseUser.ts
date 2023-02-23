import { User } from '../types';
import { parseImageLink } from './parseImageLink';

export const parseUser = (userApi: User, token: string) => {
  return {
    token: token,
    avatar: parseImageLink(userApi.avatar || '', 'avatar'),
    email: userApi.email,
    firstName: userApi.firstName,
    id: userApi.id,
    isApprove: userApi.isApprove,
    lastName: userApi.lastName,
    patronymic: userApi.patronymic,
    phone: userApi.phone,
    role: userApi.role,
    tariff: userApi.tariff,
  };
};
