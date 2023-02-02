import themeContext from "@/themeContext";
import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(themeContext);

  return (
    <nav className="w-screen flex justify-center md:justify-between py-6 px-12 bg-white text-gray-800 border-b items-center dark:text-gray-50 dark:bg-gray-800 dark:border-b-gray-700 border-b-gray-300 transition-colors duration-300">
      <button
        onClick={() => setIsDarkTheme((prev: boolean) => !prev)}
        className="border border-gray-400 rounded-full p-2"
      >
        {isDarkTheme ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>

      <Link href="/" className="inline-block text-2xl">
        Tech Insider
      </Link>

      <ul role="list" className="md:space-x-4 items-center hidden md:flex">
        <li
          role="listitem"
          className="font-medium text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-300 dark:text-gray-300 hover:text-gray-800"
        >
          <Link href="/">home</Link>
        </li>
        <li
          role="listitem"
          className="font-medium text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-300 dark:text-gray-300  hover:text-gray-800"
        >
          <Link href="/articles">articles</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
