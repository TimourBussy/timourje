import { tv } from "tailwind-variants";

export type IconDecoration =
	| "circles"
	| "haloSquare"
	| "filledDiamond"
	| "glitchedSquare"
	| "hexagon"
	| "beatingCircle"
	| "dashedCircle"
	| "outlinedDiamond"
	| "miniBeatingCircle";

const iconWrapperStyles = tv({
	base: "relative flex items-center justify-center min-w-16 min-h-16 text-red-500 dark:text-cyan-500 transition-all",
	variants: {
		decoration: {
			circles: "",
			haloSquare: `
			 border-2
			 border-red-500
			 dark:border-cyan-500`,
			filledDiamond: `
			 mr-1
			 text-white
			 dark:text-white`,
			glitchedSquare: "mr-3 min-w-12 min-h-12",
			hexagon: "mr-1.5",
			beatingCircle: "mr-3 min-w-12 min-h-12",
			dashedCircle: "mr-3 min-w-13 min-h-13",
			outlinedDiamond: "md:mr-2 mb-2 md:mb-0",
			miniBeatingCircle: "md:mr-2",
		},
	},
});

const iconChildStyles = tv({
	base: "relative z-10 w-7 h-7",
	variants: {
		decoration: {
			circles: "transition-transform group-hover:scale-110",
			haloSquare: "w-auto h-auto transition-transform group-hover:rotate-12",
			filledDiamond: "",
			glitchedSquare: "",
			hexagon: "",
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
							absolute inset-2 rounded-full border-2
							border-red-500/50
							dark:border-cyan-500/50"
					/>
					<div
						className="
							absolute inset-4 flex items-center justify-center rounded-full p-0.5 transition-all
							bg-red-500/10 group-hover:bg-red-500/20
							dark:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20"
					/>
				</>
			)}

			{decoration === "haloSquare" && (
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
				</>
			)}

			{decoration === "hexagon" && (
				<>
					<div className="absolute inset-0 flex items-center justify-center">
						<svg
							viewBox="0 0 100 100"
							className="w-full h-full max-w-full max-h-full aspect-square [&_polygon]:fill-[url(#hexagonGradientLight)] dark:[&_polygon]:fill-[url(#hexagonGradientDark)]"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid meet"
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
								className="stroke-2 stroke-red-500 dark:stroke-cyan-500"
							/>
						</svg>
					</div>
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
				</>
			)}

			{decoration === "outlinedDiamond" && (
				<>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-12 h-12 rotate-45 border-2 border-pink-500 dark:border-purple-500" />
					</div>
				</>
			)}

			{decoration === "miniBeatingCircle" && (
				<>
					<div
						className="
							absolute top-4 right-4 w-1 h-1 rounded-full animate-[beat_2s_ease-in-out_infinite]
							bg-pink-500
							dark:bg-purple-500"
					/>
				</>
			)}

			<div className={iconChildStyles({ decoration })}>{children}</div>
		</div>
	);
}
