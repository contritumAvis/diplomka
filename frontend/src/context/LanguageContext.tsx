"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ENG" | "RUS";
type Currency = "USD" | "KZT";

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
  currency: Currency;
  toggleCurrency: () => void;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ENG");
  const [currency, setCurrency] = useState<Currency>("USD");

  const toggleLang = () => setLang(prev => (prev === "ENG" ? "RUS" : "ENG"));
  const toggleCurrency = () => setCurrency(prev => (prev === "USD" ? "KZT" : "USD"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, currency, toggleCurrency }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
