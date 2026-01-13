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
			HaloSquare: "border-2 border-red-500 dark:border-cyan-500",
			filledDiamond: "mr-1 text-white dark:text-white",
			glitchedSquare: "mr-3 w-12 h-12",
			hexagon: "",
			beatingCircle: "",
			dashedCircle: "",
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
			glitchedSquare: "w-6 h-6",
			hexagon: "",
			beatingCircle: "",
			dashedCircle: "",
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
              dark:border-cyan-500
            "
					/>
					<span
						className="
              absolute inset-2 rounded-full border-2 opacity-50
              border-red-500
              dark:border-cyan-500"
					/>
					<div
						className="
              rounded-full p-0.5
              bg-red-500/10 group-hover:bg-red-500/20
              dark:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20
              transition-all"
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
			{decoration !== "circles" && (
				<div className={iconChildStyles({ decoration })}>{children}</div>
			)}
		</div>
	);
}
