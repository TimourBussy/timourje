export function HeaderAction({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="
          flex flex-col gap-0.5 sm:gap-0.75 md:gap-1 p-2 rounded-xl transition-all duration-150
          hover:bg-red-500/10
          dark:hover:bg-cyan-500/10
        "
		>
			{children}
		</button>
	);
}
