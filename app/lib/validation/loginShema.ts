import * as yup from 'yup';

export interface LoginSchema {
  email: string;
  password: string;
}

export const schemaLogin = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
