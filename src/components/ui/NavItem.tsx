import { NavLink } from "react-router-dom";

export function NavItem({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) =>
					`px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl transition-all duration-150 text-[0.8rem] sm:text-sm md:text-base
          ${
						isActive
							? "text-white bg-red-500 dark:bg-cyan-500"
							: "hover:bg-red-500/10 dark:hover:bg-cyan-500/10"
					}`
				}
			>
				{children}
			</NavLink>
		</li>
	);
}
