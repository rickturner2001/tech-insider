import "@/styles/globals.css";
import type { AppProps } from "next/app";
import themeContext from "@/themeContext";
import { useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <themeContext.Provider
      value={{ isDarkTheme: isDarkTheme, setIsDarkTheme: setIsDarkTheme }}
    >
      <Component {...pageProps} />
    </themeContext.Provider>
  );
}
