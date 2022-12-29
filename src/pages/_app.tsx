import type { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap"
          rel="stylesheet"
        />

        <title>
          TimeLogger - Never miss the best moments of your live stream again
        </title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
}