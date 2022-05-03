import Wrap from '@components/Wrap';
import Link from 'next/link';
import styles from './styles.module.scss';

const __html =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisi eget dolor lobortis suscipit eu nec dui. Suspendisse potenti. Donec lobortis fringilla ex non sollicitudin. Proin placerat leo vel dictum maximus. Suspendisse molestie fringilla luctus. Cras venenatis arcu et consectetur maximus. Sed imperdiet finibus sem vel pretium. Suspendisse potenti. Maecenas mauris nisi, bibendum eget purus at, hendrerit consequat orci. Sed condimentum viverra lacus, a tincidunt arcu. Nulla nec tortor id est suscipit ultricies a eu quam.</p>';

export default function PetitionPreview() {
  return (
    <div className={styles.petition_preview_wrapper}>
      <Wrap>
        <div className={styles.petition_preview}>
          <div className={styles.stats}>
            <div className={styles.img}>
              <img src="/dummy.jpg" alt="" />
            </div>
            <div className={styles.voting_area}>
              <div className={styles.votes}>
                <p>
                  Número de votos: <span>689/800</span>
                </p>
                <div className={styles.graph}></div>
              </div>
              <div className={styles.buttons}>
                <Link href="#">Votar</Link>
                <Link href="#">Donar</Link>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h1>Lorem ipsum</h1>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html }}
            ></div>
            <div className={styles.user_info}>
              <Link href="#">User#223</Link>
            </div>
          </div>
        </div>
      </Wrap>
    </div>
  );
}
