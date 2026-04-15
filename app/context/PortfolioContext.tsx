"use client";

import { createContext, useContext, useState } from "react";

type Mode = "professional" | "fun";
type Language = "en" | "jp";

type PortfolioContextType = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
};

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>("professional");
  const [language, setLanguage] = useState<Language>("en");

  return (
    <PortfolioContext.Provider value={{ mode, setMode, language, setLanguage }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within Provider");
  return context;
};
