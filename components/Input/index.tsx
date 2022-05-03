import styles from './styles.module.scss';

interface Props {
  name: string;
  title: string;
  type?: 'text' | 'password' | 'number';
  changeHandler: (e: any) => void;
  state: string | number;
  className?: string;
}

export default function Input({
  name,
  title,
  type = 'text',
  changeHandler,
  state,
  className = '',
}: Props) {
  return (
    <label className={`${styles.input} ${className}`}>
      <span>{title}</span>
      <input type={type} name={name} onChange={changeHandler} value={state} />
    </label>
  );
}
