import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../src/auth/useAuth";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Prueba de concepto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
