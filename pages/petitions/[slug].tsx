import Wrap from '@components/Wrap';
import styles from '@styles/petition.module.scss';
import { getPetitions } from '@utils/getPetitions';
import { Petition } from 'types';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';

interface Props {
  petition: Petition;
}

export default function PetitionPage({ petition }: Props) {
  return (
    <div className={styles.petitions_page}>
      <Wrap>
        <div className={styles.main_content}>
          <div className={styles.left}>
            <div className={styles.img}>
              <img src={petition.img} alt="" />
            </div>
            <p>
              <span>{petition.votes} personas ya han votado </span>
              ¿Llegaremos a las {petition.goal}?
            </p>
            <div className={styles.goal_status}>
              <div
                className={styles.current_status}
                style={{ width: `${(petition.votes / petition.goal) * 100}%` }}
              ></div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.donate}>Donar</div>
              <div className={styles.vote}>Votar</div>
            </div>
          </div>
          <div className={styles.right}>
            <h1>{petition.title.toUpperCase()}</h1>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: petition.body }}
            ></div>
            <div className={styles.author}>
              <img src={petition.author.img} alt="" />
              <span>
                Petitición iniciada por:{' '}
                <Link href="/">{petition.author.name}</Link>
              </span>
            </div>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params!;
  const petition = getPetitions().find((pt) => pt.slug === slug);

  if (!petition) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: { petition },
  };
};
