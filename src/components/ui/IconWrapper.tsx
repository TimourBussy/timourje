import { tv } from "tailwind-variants";

export type IconDecoration =
	| "circles"
	| "HaloSquare"
	| "filledDiamond"
	| "glitchedSquare"
	| "hexagon"
	| "beatingCircle"
	| "dashedCircle"
	| "outlinedDiamond"
	| "miniBeatingCircle";

const iconWrapperStyles = tv({
	base: "relative flex items-center justify-center w-16 h-16 text-red-500 dark:text-cyan-500 transition-all",
	variants: {
		decoration: {
			circles: "",
			HaloSquare: `
				border-2
				border-red-500
				dark:border-cyan-500`,
			filledDiamond: `
				mr-1
				text-white
				dark:text-white`,
			glitchedSquare: "mr-3 w-12 h-12",
			hexagon: "mr-1.5",
			beatingCircle: "mr-3 w-12 h-12",
			dashedCircle: "mr-3 w-13 h-13",
			outlinedDiamond: "",
			miniBeatingCircle: "",
		},
	},
});

const iconChildStyles = tv({
	base: "relative z-10",
	variants: {
		decoration: {
			circles: "",
			HaloSquare: "transition-transform group-hover:rotate-12",
			filledDiamond: "w-7 h-7",
			glitchedSquare: "w-7 h-7",
			hexagon: "w-7 h-7",
			beatingCircle: "w-6 h-6",
			dashedCircle: "w-9 h-9",
			outlinedDiamond: "",
			miniBeatingCircle: "",
		},
	},
});

export function IconWrapper({
	className,
	children,
	decoration,
}: {
	className?: string;
	children: React.ReactNode;
	decoration: IconDecoration;
}) {
	return (
		<div className={iconWrapperStyles({ decoration, className })}>
			{decoration === "circles" && (
				<>
					<span
						className="
							absolute inset-0 rounded-full border-2 animate-pulse
							border-red-500 
							dark:border-cyan-500"
					/>
					<span
						className="
							absolute inset-2 rounded-full border-2 opacity-50
							border-red-500
							dark:border-cyan-500"
					/>
					<div
						className="
							rounded-full p-0.5 transition-all
							bg-red-500/10 group-hover:bg-red-500/20
							dark:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20"
					>
						<div className="transition-transform group-hover:scale-110">
							{children}
						</div>
					</div>
				</>
			)}

			{decoration === "HaloSquare" && (
				<>
					<div className="absolute -inset-2 flex items-center justify-center pointer-events-none">
						<div
							className="
								w-18 h-18 aspect-square w-full h-full rotate-45 opacity-20 blur bg-gradient-to-r transition-opacity group-hover:opacity-40
								from-red-500 via-pink-500 to-purple-500
								dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500"
						/>
					</div>
					<div
						className="
							absolute inset-0 z-0
							bg-white
							dark:bg-slate-800"
					/>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}

			{decoration === "filledDiamond" && (
				<>
					<div className="absolute inset-0 flex items-center justify-center">
						<div
							className="
								w-12 h-12 rotate-45 rounded-md
								bg-red-500
								dark:bg-cyan-500"
						/>
					</div>
					<div
						className="
							absolute top-1 right-1 w-3 h-3 rounded-full animate-ping
							bg-pink-600
							dark:bg-purple-500"
					/>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}

			{decoration === "glitchedSquare" && (
				<>
					<div
						className="
							absolute -inset-2 opacity-30 blur-md bg-gradient-to-r
							from-red-500 to-pink-500
							dark:from-cyan-500 dark:to-purple-500"
					/>
					<div
						className="
							absolute inset-0 z-0
							bg-white
							dark:bg-slate-800"
					/>
					<div
						className="
							absolute inset-0 translate-x-0.5 translate-y-0.5 opacity-50 border-2
							border-pink-500
							dark:border-purple-500"
					/>
					<div
						className="
							absolute inset-0 border-2
							border-red-500
							dark:border-cyan-500"
					/>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}

			{decoration === "hexagon" && (
				<>
					<div className="absolute inset-0 flex items-center justify-center">
						<svg
							viewBox="0 0 100 100"
							className="
								w-13 h-13
								[&_polygon]:fill-[url(#hexagonGradientLight)]
								dark:[&_polygon]:fill-[url(#hexagonGradientDark)]"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient
									id="hexagonGradientLight"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#fce7f3" />
									<stop offset="100%" stopColor="#fbcfe8" />
								</linearGradient>
								<linearGradient
									id="hexagonGradientDark"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
									<stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
								</linearGradient>
							</defs>
							<polygon
								points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
								className="
									stroke-2
									stroke-red-500
									dark:stroke-cyan-500"
							/>
						</svg>
					</div>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}

			{decoration === "beatingCircle" && (
				<>
					<div
						className="
							absolute inset-0.5 rounded-full animate-pulse
							bg-red-500/15
							dark:bg-cyan-500/15"
					/>
					<div
						className="
							absolute inset-1.5 rounded-full flex items-center justify-center
							bg-red-500/25
							dark:bg-cyan-500/25"
					/>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}

			{decoration === "dashedCircle" && (
				<>
					<div
						className="
							absolute inset-0.5 rounded-full border-2 border-dashed
							border-red-500
							dark:border-cyan-500"
					/>
					<div
						className="
							absolute inset-2 rounded-full flex items-center justify-center
							bg-red-500/10
							dark:bg-cyan-500/10"
					/>
					<div className={iconChildStyles({ decoration })}>{children}</div>
				</>
			)}
		</div>
	);
}
