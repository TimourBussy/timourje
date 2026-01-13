export function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section
			className={`
				group flex w-full p-8 rounded-2xl border-2 transition-all
				bg-white border-red-500/20 hover:border-red-500
				dark:bg-slate-800 dark:border-cyan-500/20 dark:hover:border-cyan-500
				${className || ""}
			`}
		>
			{children}
		</section>
	);
}
