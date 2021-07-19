import Layout from "../components/Layout";
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' storageKey="nightwind-mode" defaultTheme="system">
      <Layout pageTitle="Nóng quá nóng" description="My Personal Blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}