import { GetServerSideProps } from 'next';
import styles from '@styles/user_petitions.module.scss';
import { getPetitions } from '@utils/getPetitions';
import PetitionPreview from '@components/PetitionPreview';
import Wrap from '@components/Wrap';
import { Petition } from 'types';

interface Props {
  petitions: Petition[];
  author: string;
}

export default function UserPetitions({ petitions, author }: Props) {
  return (
    <div className={styles.user_petit_page}>
      <h1>Peticiones de {author}</h1>
      <Wrap>
        <div className={styles.petitions}>
          {petitions.map((pt, i) => (
            <PetitionPreview {...pt} key={`user_pt-${i}`} />
          ))}
        </div>
      </Wrap>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      petitions: getPetitions(),
      author: params!.slug,
    },
  };
};
