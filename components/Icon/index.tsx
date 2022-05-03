import styles from './styles.module.scss';

interface Props {
  className?: string;
  d: string;
  viewBox: string;
}

export default function Icon({ className = '', viewBox, d }: Props) {
  return (
    <div className={`${styles.icon} ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path d={d} />
      </svg>
    </div>
  );
}
