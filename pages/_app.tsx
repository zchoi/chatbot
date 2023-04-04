import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <div className={inter.className}>
      <Toaster />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default appWithTranslation(App);


