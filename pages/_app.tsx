import { Inter } from "@next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { classNames } from "../components/utilities";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={classNames(inter.variable, "font-inter")}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
