import { createContext } from "react";
import { theme } from "./Theme";
// creating context provider props
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
// creating context
export const ThemeContext = createContext(theme);
// creating context provider
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
