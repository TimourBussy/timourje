import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/sections/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
