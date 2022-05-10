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

const slides: ISlide[] = [
  {
    title: 'Título de la petición',
    description: '',
    component: <input type="text" className={styles.inp_title} />,
    help: [
      { info: 'Usa títulos cortos', example: 'algún ejemplo' },
      { info: 'Céntrate en el problema', example: 'algún ejemplo' },
    ],
  },
  {
    title: 'Cuerpo de la petición',
    description:
      'Es el momento de defender por qué hay que apoyar esta petición',
    component: <textarea />,
    help: [
      { info: 'No uses lenguaje técnico', example: 'algún ejemplo' },
      { info: 'Céntrate en el problema', example: 'algún ejemplo' },
    ],
  },
  {
    title: 'Imágen destacada',
    description: '',
    component: (
      <div className={`${styles.file_upload} flex-center`}>
        Arrastra aquí la imágen
      </div>
    ),
    help: [
      {
        info: 'Utiliza imágenes que reflejen el por qué de la petición',
        example: 'algún ejemplo',
      },
      { info: 'Céntrate en el problema', example: 'algún ejemplo' },
    ],
  },
  {
    title: '¿Está todo bien?',
    description: '',
    component: <></>,
    help: [],
  },
];

interface State {
  title: string;
  body: string;
}

export default function Create() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [state, setState] = useState<State>({
    title: 'Prueba',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin lorem sed enim placerat imperdiet. Mauris ornare, ex id ultrices consectetur, lectus justo sagittis leo, ac ornare lorem ex ac augue. Vestibulum tincidunt pellentesque tortor, eget gravida arcu vehicula sit amet. Vestibulum scelerisque ex sit amet metus tristique ullamcorper. Quisque a egestas nisl, sed faucibus erat. Duis tristique tortor lectus, sit amet interdum nisi cursus nec. Mauris hendrerit lacus et dui malesuada tincidunt. Quisque ultrices lacus urna, et dapibus mi auctor ut. Ut quam nibh, interdum porttitor augue id, sollicitudin vehicula mauris. Nullam lobortis est quis turpis feugiat, eu lacinia lorem vulputate. Suspendisse eget consectetur risus. Pellentesque ultricies rutrum fringilla. Sed finibus dolor consectetur finibus tristique. Integer tempor neque eu dapibus lobortis. Donec sit amet augue sollicitudin libero varius porta. Sed fringilla quam ac est pharetra, tempor vulputate tortor egestas. Vestibulum finibus euismod mi eget lacinia. Morbi ipsum ante, vestibulum sit amet pellentesque eget, lobortis non neque.',
  });

  return (
    <div className={styles.create_page}>
      <Wrap>
        <div
          className={styles.status_bar}
          style={{ width: `${(currentSlide + 1) * 25}%` }}
        ></div>
        <div className={styles.content}>
          <h2>{slides[currentSlide].title}</h2>
          {currentSlide < 3 ? (
            slides[currentSlide].component
          ) : (
            <div className={styles.check_data}>
              <h3>{state.title}</h3>
              <hr />
              <p>{state.body}</p>
            </div>
          )}
          <div className={styles.btn_section}>
            {currentSlide ? (
              <div
                className={styles.before}
                onClick={() => setCurrentSlide((st) => st - 1)}
              >
                Atrás
              </div>
            ) : (
              ''
            )}
            <div
              className={styles.next}
              onClick={() => setCurrentSlide((st) => st + 1)}
            >
              Siguiente
            </div>
          </div>
        </div>
        {slides[currentSlide].help.length ? (
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
        ) : (
          ''
        )}
      </Wrap>
    </div>
  );
}
