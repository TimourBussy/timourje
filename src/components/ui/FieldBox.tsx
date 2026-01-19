export function FieldBox({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="
				mt-2 mb-6 rounded-xl text-xs sm:text-base font-normal border-2 transition-all
				text-black border-red-500/20 bg-white focus-within:border-red-500
				dark:text-white dark:border-cyan-500/20 dark:bg-gray-900 dark:focus-within:border-cyan-500"
		>
			{children}
		</div>
	);
}
