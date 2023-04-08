import Layout from '@/components/layout'
import AppContextProvider from '@/context/appContext'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
    <AppContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContextProvider>
    </ThemeProvider>
  )
}
