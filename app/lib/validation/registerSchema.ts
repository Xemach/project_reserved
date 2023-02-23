import * as yup from 'yup';

export interface RegisterInputSchema {
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  phone: string;
  password: string;
  recoverPassword: string;
}

export const schemaRegister = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    patronymic: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string().length(12),
    password: yup.string().min(6).required(),
    recoverPassword: yup.string().min(6).required(),
  })
  .required();
