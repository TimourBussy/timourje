import "./i18n";
import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CV } from "./pages/CV";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <Header
        isDark={isDark}
        toggleTheme={() => {
          setIsDark((prev) => {
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            document.documentElement.classList.toggle("dark", next);
            return next;
          });
        }}
      />

      <main className="flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
