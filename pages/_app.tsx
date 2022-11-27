import type { AppProps } from 'next/app';

import 'Styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
