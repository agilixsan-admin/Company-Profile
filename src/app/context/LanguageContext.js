"use client";

import { createContext, useContext } from "react";

const LanguageContext = createContext({ lang: "en", toggleLang: () => {} });

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ lang: "en", toggleLang: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: "en", toggleLang: () => {} };
  return ctx;
}

