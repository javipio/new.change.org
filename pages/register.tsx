import Icon from '@components/Icon';
import Wrap from '@components/Wrap';
import styles from '@styles/register.module.scss';
import { ChangeEventHandler, useState } from 'react';

const AccTypes = ['usuario', 'empresa'] as const;
type AccType = typeof AccTypes[number];

interface State {
  name: string;
  password: string;
  confirmationPasswd: string;
}

interface UserState extends State {
  username: string;
  dni: string;
  mail: string;
}

interface EnterpriseState extends State {
  sector: string;
  domain: string;
  cif: string;
}

const defaultState = {
  name: '',
  password: '',
  confirmationPasswd: '',
};

export default function Register() {
  const [accType, setAcctype] = useState<AccType>('usuario');
  const [userState, setUserState] = useState<UserState>({
    ...defaultState,
    username: '',
    dni: '',
    mail: '',
  });
  const [enterpriseState, setEnterpriseState] = useState<EnterpriseState>({
    ...defaultState,
    sector: '',
    cif: '',
    domain: '',
  });

  const changeHandlerWrapper = (accType: AccType) => {
    return (e) => {
      if (accType === 'usuario')
        setUserState(
          (val) => ({ ...val, [e.target.name]: e.target.value } as UserState)
        );
      else
        setEnterpriseState(
          (val) =>
            ({ ...val, [e.target.name]: e.target.value } as EnterpriseState)
        );
    };
  };

  return (
    <div className={styles.register_page}>
      <Wrap>
        <div className={styles.register_content}>
          <div className={styles.type}>
            {AccTypes.map((val) => (
              <div
                key={`acc_btn-${val}`}
                className={accType === val ? styles.active : ''}
                onClick={() => setAcctype(val)}
              >
                {val.toUpperCase()}
              </div>
            ))}
          </div>
          <div className={styles.form}>
            {accType === 'usuario' ? (
              <UserForm
                state={userState}
                changeHandler={changeHandlerWrapper('usuario')}
              />
            ) : (
              <EnterpriseForm
                state={enterpriseState}
                changeHandler={changeHandlerWrapper('empresa')}
              />
            )}
            <input
              className={`${styles.submit} ${styles.disabled}`}
              type="submit"
              value="Registrarse"
            />
          </div>
        </div>
      </Wrap>
    </div>
  );
}

const userInps: {
  name: [keyof UserState]; //TODO: arreglar lío de interfaces
  text: string;
  type: 'text' | 'password';
}[] = [
  {
    name: 'name',
    text: 'Nombre de usuario',
    type: 'text',
  },
  {
    name: 'username',
    text: 'Nombre completo',
    type: 'text',
  },
  {
    name: 'dni',
    text: 'DNI',
    type: 'text',
  },
  {
    name: 'mail',
    text: 'Correo electrónico',
    type: 'text',
  },
  {
    name: 'password',
    text: 'Contraseña',
    type: 'password',
  },
  {
    name: 'confirmationPasswd',
    text: 'Confirmar contraseña',
    type: 'password',
  },
];

interface FormProps<T> {
  state: T;
  changeHandler: () => () => void;
}

const UserForm = ({ state, changeHandler }: FormProps<UserState>) => (
  <>
    {userInps.map(({ name, text, type }) => (
      <label>
        <span>{text}</span>
        <input
          name={name}
          onChange={changeHandler}
          value={state[name]}
          type={type}
        />
      </label>
    ))}
  </>
);

const enterpriseInps = [
  {
    name: 'name',
    text: 'Nombre de usuario',
    type: 'text',
  },
  {
    name: 'sector',
    text: 'Sector empresarial',
    type: 'text',
  },
  {
    name: 'cif',
    text: 'CIF',
    type: 'text',
  },
  {
    name: 'domain',
    text: 'Dominio empresarial',
    type: 'text',
  },
  {
    name: 'password',
    text: 'Contraseña',
    type: 'password',
  },
  {
    name: 'confirmationPasswd',
    text: 'Confirmar contraseña',
    type: 'password',
  },
];

const EnterpriseForm = ({
  state,
  changeHandler,
}: FormProps<EnterpriseState>) => (
  <>
    {enterpriseInps.map(({ name, text, type }) => (
      <label>
        <span>{text}</span>
        <input
          name={name}
          onChange={changeHandler}
          value={state[name]}
          type={type}
        />
      </label>
    ))}
  </>
);
