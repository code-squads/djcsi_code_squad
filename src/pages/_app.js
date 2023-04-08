import { ThemeProvider } from 'next-themes'
import Layout from '@/components/layout'
import AppContextProvider from '@/context/appContext'
import { AuthProvider } from "../context/AuthContext";

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AuthProvider>
    <AppContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContextProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
