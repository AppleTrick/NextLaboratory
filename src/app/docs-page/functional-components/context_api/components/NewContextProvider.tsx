"use client";

import { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  ChangeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const NewContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const ChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <ThemeContext.Provider value={{ theme, ChangeTheme }}>{children}</ThemeContext.Provider>;
};
