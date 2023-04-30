import "<import>/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NavBar from "<import>/components/NavBar";
import Footer from "<import>/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
