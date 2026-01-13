import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CV } from "./pages/CV";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Header } from "./components/layout/Header";

export default function App() {
	const [lang, setLang] = useState<"FR" | "EN">("FR");
	const toggleLang = () => setLang((l) => (l === "FR" ? "EN" : "FR"));

	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme
			? savedTheme === "dark"
			: window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	const [isDark, setIsDark] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark((prev) => {
			const next = !prev;
			localStorage.setItem("theme", next ? "dark" : "light");
			document.documentElement.classList.toggle("dark", next);
			return next;
		});
	};

	return (
		<>
			<Header
				lang={lang}
				toggleLang={toggleLang}
				isDark={isDark}
				toggleTheme={toggleTheme}
			/>

			<main className="flex flex-col items-center">
				<Routes>
					<Route path="/" element={<Home lang={lang} />} />
					<Route path="/cv" element={<CV lang={lang} />} />
					<Route path="/portfolio" element={<Portfolio lang={lang} />} />
					<Route path="/contact" element={<Contact lang={lang} />} />
				</Routes>
			</main>
		</>
	);
}
