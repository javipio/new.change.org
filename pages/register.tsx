import { EnterpriseForm, UserForm } from '@components/RegisterForm';
import Wrap from '@components/Wrap';
import styles from '@styles/register.module.scss';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import type {
  RegisterEnterpriseState as EnterpriseState,
  RegisterUserState as UserState,
} from 'types';

const AccTypes = ['usuario', 'empresa'] as const;
type AccType = typeof AccTypes[number];

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

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const currentState = accType === 'usuario' ? userState : enterpriseState;
    let tempIsValid = Object.values(currentState).reduce(
      (prev, curr) => prev && curr,
      true
    );

    tempIsValid =
      tempIsValid && currentState.password == currentState.confirmationPasswd;

    setIsValid(tempIsValid);
  }, [userState, enterpriseState]);

  const changeHandlerWrapper = (accType: AccType) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (accType === 'usuario')
        setUserState((val) => ({
          ...val,
          [e.target.name as keyof UserState]: e.target.value,
        }));
      else
        setEnterpriseState((val) => ({
          ...val,
          [e.target.name as keyof UserState]: e.target.value,
        }));
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
                <span>{val.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <div className={styles.form}>
            <div className={styles.grid}>
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
            </div>
            <input
              className={`${styles.submit} ${isValid ? '' : styles.disabled}`}
              type="submit"
              value="Registrarse"
            />
          </div>
          <Link href="/login">¿Ya tienes cuenta?</Link>
        </div>
      </Wrap>
    </div>
  );
}
