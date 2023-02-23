export interface User {
  token: string;
  avatar: string | null;
  email: string;
  firstName: string;
  id: number;
  isApprove: boolean;
  lastName: string;
  patronymic: string;
  phone: string;
  role: Role;
  tariff: Tariff;
}

export interface Role {
  id: number;
  name: string;
}

export interface Tariff {
  id: number;
  name: string;
}

export interface RegisterPost {
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  phone: string;
  password: string;
}

export interface Detail {
  description: string;
  id: number;
  images: string[] | null;
  numberSeats: number;
  title: string;
}
