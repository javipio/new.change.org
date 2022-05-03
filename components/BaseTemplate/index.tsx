import Header from '@components/Header';
import { ReactChild } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactChild | ReactChild[];
}

export default function BaseTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}
