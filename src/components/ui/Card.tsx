export function Card({
	size = "big",
	className,
	children,
}: {
	size?: "big" | "small";
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<section
			className={`
				${
					size === "small"
						? "p-3 md:p-5 md:items-start md:justify-start"
						: "p-6 md:p-8 w-full max-w-full"
				}
				group flex flex-col min-w-0 rounded-2xl border-2 transition-all
				text-gray-700 bg-white border-red-500/20 hover:border-red-500
				dark:text-gray-300 dark:bg-slate-800 dark:border-cyan-500/20 dark:hover:border-cyan-500
				${className || ""}
			`}
		>
			{children}
		</section>
	);
}
