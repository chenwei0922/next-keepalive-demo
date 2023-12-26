import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { KeepAliveContextProvider } from '@/views/KeepAlive';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <KeepAliveContextProvider>
      <Component {...pageProps} />
    </KeepAliveContextProvider>
  )
  return <Component {...pageProps} />
}
