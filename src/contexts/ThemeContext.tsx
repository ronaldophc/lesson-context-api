import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define your context props
export interface ThemeContextProps {
  light: boolean;
  setLight: () => void;
  theme: {
    backgroundColor: string;
    color: string;
    buttonColor: string;
  };
}

const lightTheme = {
  backgroundColor: "#fff",
  color: "#000",
  buttonColor: "#000",
};

const darkTheme = {
  backgroundColor: "#000",
  color: "#fff",
  buttonColor: "#fff",
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [light, setLight] = useState(true);

  const themeContext: ThemeContextProps = {
    light,
    setLight: () => setLight(!light),
    theme: light ? lightTheme : darkTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext<ThemeContextProps>(ThemeContext);

  if (context === undefined) {
    throw new Error("useTrack must be used inside ThemeContextProvider!");
  }

  return context;
}