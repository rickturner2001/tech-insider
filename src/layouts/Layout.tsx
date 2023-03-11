import { Fragment, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import themeContext from "@/themeContext";

const Layout = ({ children }: { children: JSX.Element }) => {
  const { isDarkTheme } = useContext(themeContext);
  return (
    <div
      className={`${
        isDarkTheme ? "dark" : ""
      } bg-white dark:bg-gray-800 min-h-screen flex flex-col h-full`}
    >
      <Navbar />

      <div className="dark:bg-gray-800 h-full flex flex-col items-center px-4 pt-4 pb-24">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
