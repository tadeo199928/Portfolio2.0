import { createContext, useContext } from "react";



interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: true,
  setIsDarkMode:  () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);