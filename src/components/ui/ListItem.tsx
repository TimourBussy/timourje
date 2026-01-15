export function ListItem({
	children,
}: {
	children: React.ReactNode | string | string[];
}) {
	return (
		<li
			className="
				p-3 text-center rounded-lg border bg-gradient-to-br transition-all hover:scale-105
				border-red-200 from-red-50 to-pink-50
				dark:border-cyan-700/30 dark:from-cyan-900/20 dark:to-purple-900/20
			"
		>
			{Array.isArray(children) ? (
				<div className="flex flex-col gap-2">
					{children.map((item, index) => (
						<span key={index} className={index === 0 ? "text-2xl" : "text-sm"}>
							{item}
						</span>
					))}
				</div>
			) : (
				children
			)}
		</li>
	);
}
