"use client";

import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { useState, useEffect, createContext } from "react";

interface ThemeContextType {
  theme: "minimalist" | "corporate";
  setTheme: (theme: "minimalist" | "corporate") => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"minimalist" | "corporate">("minimalist");
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme =
      (localStorage.getItem("portfolio-theme") as "minimalist" | "corporate") ||
      "minimalist";
    const savedDarkMode = localStorage.getItem("portfolio-dark") === "true";

    setTheme(savedTheme);
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const html = document.documentElement;

    html.classList.remove("theme-corporate", "theme-minimalist");
    if (theme === "corporate") {
      html.classList.add("theme-corporate");
    }

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-dark", darkMode.toString());
  }, [theme, darkMode, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ThemeContext.Provider
        value={{ theme, setTheme, darkMode, setDarkMode }}
      >
        {children}
      </ThemeContext.Provider>
      <Analytics />
    </>
  );
}
