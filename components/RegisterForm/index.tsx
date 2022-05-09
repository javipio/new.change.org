import Input from '@components/Input';
import { ChangeEvent } from 'react';
import type {
  RegisterEnterpriseState as EnterpriseState,
  RegisterUserState as UserState,
} from 'types';

const userInps: {
  name: keyof UserState;
  title: string;
  type: 'text' | 'password';
}[] = [
  {
    name: 'name',
    title: 'Nombre de usuario',
    type: 'text',
  },
  {
    name: 'username',
    title: 'Nombre completo',
    type: 'text',
  },
  {
    name: 'dni',
    title: 'DNI',
    type: 'text',
  },
  {
    name: 'mail',
    title: 'Correo electrónico',
    type: 'text',
  },
  {
    name: 'password',
    title: 'Contraseña',
    type: 'password',
  },
  {
    name: 'confirmationPasswd',
    title: 'Confirmar contraseña',
    type: 'password',
  },
];

interface FormProps<T> {
  state: T;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UserForm = ({ state, changeHandler }: FormProps<UserState>) => (
  <>
    {userInps.map(({ name, title, type }) => (
      <Input
        name={name}
        changeHandler={changeHandler}
        state={state[name]}
        type={type}
        title={title}
        key={`user_${title}`}
      />
    ))}
  </>
);

const enterpriseInps: {
  name: keyof EnterpriseState;
  title: string;
  type: 'text' | 'password';
}[] = [
  {
    name: 'name',
    title: 'Nombre de usuario',
    type: 'text',
  },
  {
    name: 'sector',
    title: 'Sector empresarial',
    type: 'text',
  },
  {
    name: 'cif',
    title: 'CIF',
    type: 'text',
  },
  {
    name: 'domain',
    title: 'Dominio empresarial',
    type: 'text',
  },
  {
    name: 'password',
    title: 'Contraseña',
    type: 'password',
  },
  {
    name: 'confirmationPasswd',
    title: 'Confirmar contraseña',
    type: 'password',
  },
];

export const EnterpriseForm = ({
  state,
  changeHandler,
}: FormProps<EnterpriseState>) => (
  <>
    {enterpriseInps.map(({ name, title, type }) => (
      <Input
        name={name}
        changeHandler={changeHandler}
        state={state[name]}
        type={type}
        title={title}
        key={`entp_${title}`}
      />
    ))}
  </>
);
