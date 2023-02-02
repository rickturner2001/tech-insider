import { Dispatch, SetStateAction, createContext } from "react";

const themeContext = createContext<{
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}>({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

export default themeContext;
