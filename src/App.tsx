import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/sections/Header";

export default function App() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const toggleLang = () => {
    setLang((prev) => (prev === "FR" ? "EN" : "FR"));
  };

  return (
    <>
      <Header lang={lang} toggleLang={toggleLang} />

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
