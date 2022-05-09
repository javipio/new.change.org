import Link from 'next/link';
import styles from './styles.module.scss';
import { Petition } from 'types';

export default function PetitionPreview({
  title,
  img,
  body,
  author,
  slug,
}: Petition) {
  const excerp =
    body.substring(0, 440).replaceAll(RegExp('</?[^>]+>', 'g'), '') + '...';
  return (
    <div className={styles.petition_preview}>
      <div className={styles.img}>
        <Link href={`/petitions/${slug}`} passHref>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: excerp }}
        ></div>
        <div className={styles.user_info}>
          <span>
            Creada por <Link href="#">{author.name}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
