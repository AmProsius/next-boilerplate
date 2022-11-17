import { Inter } from "@next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
