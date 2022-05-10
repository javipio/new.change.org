import Icon from '@components/Icon';
import Wrap from '@components/Wrap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const navigationItems = [
  {
    title: 'Donar',
    viewBox: '0 0 32 32',
    d: 'M29 4h-26c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zM3 6h26c0.542 0 1 0.458 1 1v3h-28v-3c0-0.542 0.458-1 1-1zM29 26h-26c-0.542 0-1-0.458-1-1v-9h28v9c0 0.542-0.458 1-1 1zM4 20h2v4h-2zM8 20h2v4h-2zM12 20h2v4h-2z',
    href: '/donate',
  },
  {
    title: 'Mis peticiones',
    viewBox: '0 0 512 512',
    d: 'M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z',
    href: '/user/default',
  },
  {
    title: 'Crear petición',
    viewBox: '0 0 640 512',
    d: 'M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z',
    href: '/petitions/create',
  },
];

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    if (window && window.pageYOffset >= 60) setTop(false);
    else if (!top) setTop(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <header className={`${styles.header} ${top ? '' : styles.sticky}`}>
      <Wrap>
        <div className={styles.header_wrapper}>
          <nav className={styles.navigation}>
            <ul>
              {navigationItems.map(({ title, viewBox, d, href }, idx) => (
                <li key={`nav_item-${idx}`}>
                  <Link href={href} passHref>
                    <a>
                      <span>{title}</span>
                      {/* <Icon viewBox={viewBox} d={d} /> */}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.logo}>
            <Link href="/" passHref>
              <img src="/logo1.png" alt="" />
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.search}>
              <label>
                <Icon
                  className={styles.search_icon}
                  viewBox="0 0 24 24"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
                <input type="text" name="" id="" placeholder="Búsqueda" />
              </label>
            </div>
            <div className={styles.profile}>
              <div className={styles.profile_pic}>
                <Link href="/login" passHref>
                  <img src="/lucho.jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </header>
  );
}
