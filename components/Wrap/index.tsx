import { ReactChild, ReactChildren } from 'react';
import styles from './wrap.module.scss';

export default function Wrap({
    children,
}: {
    children: ReactChildren | ReactChild | ReactChildren[] | ReactChild[];
}) {
    return <div className={styles.wrap}>{children}</div>;
}
