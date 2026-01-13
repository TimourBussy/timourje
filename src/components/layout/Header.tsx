import { Heading } from "../ui/Heading";
import { NavItem } from "../ui/NavItem";
import { HeaderAction } from "../ui/HeaderAction";

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
        sticky top-0 z-10 mb-12 border-b
        bg-white border-rose-200
        dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-900 dark:border-sky-950"
		>
			<div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-85 py-6 lg:py-0.75 flex flex-col lg:flex-row items-center lg:justify-between">
				<a
					href="/"
					className="rounded-xs mb-5 lg:mb-0 transition-all hover:scale-105"
				>
					<Heading level={2} variant="vibrant">
						Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
					</Heading>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								fill="currentColor"
								className="w-3.5 sm:w-4 md:w-5"
							>
								<path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
							</svg>
							<span className="text-[0.65rem] sm:text-xs md:text-sm font-medium">
								{lang === "FR" ? "FR" : "EN"}
							</span>
						</HeaderAction>
					</li>
					<li>
						<HeaderAction onClick={toggleTheme}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 -960 960 960"
								className="w-3.5 sm:w-4 md:w-5"
							>
								<path
									d={
										isDark
											? "M483.11-96q-80.49 0-150.92-30.66-70.42-30.66-122.65-82.88-52.22-52.23-82.88-122.65Q96-402.62 96-483.11 96-623 184-730.5T412-864q-17 99 11.5 188T521-518q67 67 158 95t185 11q-24 138-132.5 227T483.11-96Zm-.11-72q88 0 164-45t115-122q-83-5-158.5-39.5T469-468q-60-60-94-135t-40-159q-77 41-122 116.18-45 75.19-45 162.82 0 131.25 91.88 223.12Q351.75-168 483-168Zm-14-300Z"
											: "M444-768v-144h72v144h-72Zm265 112-54-52 104-102 52 50-102 104Zm59 212v-72h144v72H768ZM444-48v-144h72v144h-72ZM251-658 147-760l54-50 101 101-51 51Zm509 511L659-252l50-50 104 100-53 55ZM48-444v-72h144v72H48Zm152 297-51-53 102-100 25 24 24 25-100 104Zm280-93q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-72q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-168Z"
									}
								/>
							</svg>
						</HeaderAction>
					</li>
				</ul>
			</div>
		</header>
	);
}
