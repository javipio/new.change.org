import PetitionPreview from '@components/PetitionPreview';
import { getPetitions } from '@utils/getPetitions';
import type { GetServerSideProps } from 'next';
import { Petition } from 'types';
import styles from '@styles/home.module.scss';
import { useEffect, useRef, useState } from 'react';
import { sleep } from '@utils/sleep';
import Wrap from '@components/Wrap';

interface Props {
  petitions: Petition[];
}

const frases_bonitas = [
  'Persiste, si todo fuera fácil, cualquiera lo lograría.',
  'Creo que el crecimiento personal, tiene mucho que ver con la capacidad de actuar.',
  'Deja de tener miedo a lo que puede salir mal, y emociónate por lo que puede salir bien.',
  'Nunca es demasiado tarde para hacer lo que ames.',
  'No siempre conseguimos lo que queremos, pero tarde o temprano la vida nos concede aquello que merecemos.',
  'Todas las mañanas, levántate con la idea de comerte el mundo.',
  'Tu futuro depende de lo que hagas hoy, no mañana.',
  'Si puedes soñarlo, puedes hacerlo.',
  'No te conformes con lo que necesitas, ¡ve a por lo que te mereces!.',
  'Cuando sientas que vas a rendirte, piensa en por qué empezaste.',
  'Pierde el miedo para que no pierdas oportunidades.',
  'Trabaja mientras otros duermen. Estudia mientras otros se divierten. Persiste mientras otros descansan y luego vivirás lo que otros solo sueñan.',
  'Tu futuro depende de lo que hagas hoy, no mañana.',
  'Siempre habrá alguien que dude de ti, solo asegúrate que esa persona no eres tú.',
  'Todo es muy difícil antes de ser fácil.',
  'Puedes más de lo que te imaginas, vales más de lo que crees.',
  'Si la montaña que subes parece cada vez más imponente, es que la cima está cada vez más cerca.',
];

const getRandomPhrase = () =>
  frases_bonitas[Math.floor(Math.random() * frases_bonitas.length)];

export default function Home({ petitions }: Props) {
  const [phrase, setPhrase] = useState(getRandomPhrase());
  const phraseContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setInterval(async () => {
  //     phraseContainerRef.current!.style.opacity = '0';
  //     await sleep(200);
  //     setPhrase(getRandomPhrase());
  //     await sleep(200);
  //     phraseContainerRef.current!.style.opacity = '1';
  //   }, 5000);

  //   setTimeout(() => {});
  // }, []);

  return (
    <div className={styles.home_page}>
      <Wrap>
        <div className={`${styles.landing} flex-center`}>
          <div
            className={`${styles.text} flex-center`}
            ref={phraseContainerRef}
          >
            <span>{phrase}</span>
          </div>
        </div>
        <div className={styles.tendence}>
          <h2>PETICIONES QUE SON TENDENCIA</h2>
          <div className={styles.petitions}>
            {petitions.map((pt) => (
              <PetitionPreview {...pt} />
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { petitions: getPetitions() },
  };
};
