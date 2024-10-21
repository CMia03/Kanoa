import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app";
import { AuthProvider } from './context/AuthContext';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>

        <Component {...pageProps} />
      </AuthProvider>

    </SessionProvider>
  );
}
export default App;