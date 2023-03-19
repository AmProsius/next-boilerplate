import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { classNames } from "../components/utilities";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classNames(inter.variable, "font-inter")}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
