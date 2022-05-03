import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@components/Header';
import BaseTemplate from '@components/BaseTemplate';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseTemplate>
      <Component {...pageProps} />
    </BaseTemplate>
  );
}
