import { NavItem } from "../ui/NavItem";
import { HeaderAction } from "../ui/HeaderAction";
import LanguageIcon from "../../assets/icons/language.svg?react";
import SunIcon from "../../assets/icons/sun.svg?react";
import MoonIcon from "../../assets/icons/moon.svg?react";

export function Header({
	lang,
	toggleLang,
	isDark,
	toggleTheme,
}: {
	lang: "FR" | "EN";
	toggleLang: () => void;
	isDark: boolean;
	toggleTheme: () => void;
}) {
	return (
		<header
			className="
				sticky top-0 z-100 mb-12 border-b
				bg-white border-rose-200
				dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-900 dark:border-sky-950
			"
		>
			<div className="px-4 md:px-8 lg:px-16 xl:px-36 py-6 lg:py-0.75 flex flex-col lg:flex-row items-center lg:justify-between">
				<a
					href="/"
					className="
						rounded-xs mb-5 lg:mb-0 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r transition-all hover:scale-105
						from-red-600 to-pink-600
						dark:from-cyan-500 dark:to-purple-500"
				>
					Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
				</a>

				<nav className="lg:ml-auto mb-5 lg:mb-0">
					<ul className="flex space-x-5">
						<NavItem to="/">{lang === "FR" ? "Accueil" : "Home"}</NavItem>
						<NavItem to="/cv">CV</NavItem>
						<NavItem to="/portfolio">Portfolio</NavItem>
						<NavItem to="/contact">Contact</NavItem>
					</ul>
				</nav>

				<ul
					className="
						relative flex items-center justify-center space-x-2 lg:ml-10 lg:pl-4 lg:border-l
						border-rose-200
						dark:border-sky-950"
				>
					<li>
						<HeaderAction onClick={toggleLang}>
							<LanguageIcon className="w-3.5 sm:w-4 md:w-5" />
							<span className="font-medium text-[0.65rem] sm:text-xs md:text-sm">
								{lang === "FR" ? "FR" : "EN"}
							</span>
						</HeaderAction>
					</li>
					<li>
						<HeaderAction onClick={toggleTheme}>
							{isDark ? (
								<MoonIcon className="w-3.5 sm:w-4 md:w-5" />
							) : (
								<SunIcon className="w-3.5 sm:w-4 md:w-5" />
							)}
						</HeaderAction>
					</li>
				</ul>
			</div>
		</header>
	);
}
