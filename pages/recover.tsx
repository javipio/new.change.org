import Icon from '@components/Icon';
import Input from '@components/Input';
import styles from '@styles/recover.module.scss';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

interface State {
  name: string;
  password: string;
}

export default function Login() {
  const [state, setState] = useState<State>({ name: '', password: '' });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setState((st) => ({ ...st, [e.target.name]: e.target.value }));

  return (
    <div className={styles.recover_page}>
      <div className={styles.recover_content}>
        <h1>RECUPERAR CUENTA</h1>
        <div className={styles.form}>
          <Input
            name="name"
            title="Nombre de usuario"
            changeHandler={changeHandler}
            state={state.name}
          />
          <input type="submit" value="Enviar" />
        </div>
        <Link href="/login">
          <a className={styles.register}>¿Volver a login?</a>
        </Link>
      </div>
    </div>
  );
}
