import '../styles/theme.scss'
import type { AppProps } from 'next/app'
import {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null
  }, []);

  return <Component {...pageProps} />
}

export default MyApp