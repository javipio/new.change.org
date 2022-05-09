import Wrap from '@components/Wrap';
import styles from '@styles/create.module.scss';
import { useState } from 'react';

interface HelpElement {
  info: string;
  example: string;
}

interface ISlide {
  title: string;
  description: string;
  component: JSX.Element;
  help: HelpElement[];
}

const slides: Record<string, ISlide> = {
  title: {
    title: 'Título de la petición',
    description: '',
    component: <input type="text" />,
    help: [
      { info: 'Usa títulos cortos', example: 'algún ejemplo' },
      { info: 'Céntrate en el problema', example: 'algún ejemplo' },
    ],
  },
  body: {
    title: 'Cuerpo de la petición',
    description:
      'Es el momento de defender por qué hay que apoyar esta petición',
    component: <></>,
    help: [{ info: '', example: '' }],
  },
  img: {
    title: 'Imágen destacada',
    description: '',
    component: <></>,
    help: [{ info: '', example: '' }],
  },
  confirmation: {
    title: '¿Está todo bien?',
    description: '',
    component: <></>,
    help: [{ info: '', example: '' }],
  },
};

type Slide = keyof typeof slides;

export default function Create() {
  const [currentSlide, setCurrentSlide] = useState<Slide>('title');

  return (
    <div className={styles.create_page}>
      <Wrap>
        <div className={styles.status_bar}></div>
        <div className={styles.content}>
          <h2>{slides[currentSlide].title}</h2>
          {slides[currentSlide].component}
          <div className={styles.btn_section}>
            <div className={styles.before}>Atrás</div>
            <div className={styles.next}>Siguiente</div>
          </div>
        </div>
        <div className={styles.info}>
          <h2>Ayuda</h2>
          <ul>
            {slides[currentSlide].help.map(({ info, example }, i) => (
              <li key={`help_${currentSlide}-${i}`}>
                <h3>{info}</h3>
                <p>{example}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </div>
  );
}
