import Layout from "../components/Layout";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout pageTitle="Nóng quá nóng" description="My Personal Blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}