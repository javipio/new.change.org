import PetitionPreview from '@components/PetitionPreview';
import type { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <div className="">
      <PetitionPreview />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  return {
    props: {},
  };
};
