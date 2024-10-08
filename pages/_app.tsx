import Head from 'next/head';
import Header from '@/components/@shared/header/Header';
import Providers from '@/contexts/Providers';
import '@/styles/globals.scss';
import '@/styles/quillCustom.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>럭키위키</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="친구들이 만드는 나만의 위키" />
        <meta property="og:title" content="럭키위키" />
        <meta property="og:description" content="친구들이 만드는 나만의 위키" />
        <meta property="og:image" content="/og_image.png" />
        <meta property="og:url" content="https://luckywiki.vercel.app" />
      </Head>
      <Providers>
        <Header />
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
