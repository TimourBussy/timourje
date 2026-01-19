import { tv } from "tailwind-variants";

const headingStyles = tv({
	base: "font-bold",
	variants: {
		level: {
			1: "text-4xl sm:text-5xl md:text-6xl text-center",
			2: "text-5xl text-center",
			3: "text-2xl sm:text-3xl",
			4: "text-2xl",
			5: "text-xl",
		},
		variant: {
			gradient: `
				bg-gradient-to-r bg-clip-text text-transparent
				from-rose-600 to-fuchsia-700
				dark:from-indigo-300 dark:to-purple-400`,
			plain: `
				text:black
				dark:text-white`,
		},
	},
	defaultVariants: {
		variant: "plain",
	},
});

export function Heading({
	level,
	variant,
	className,
	children,
}: {
	level: 1 | 2 | 3 | 4 | 5;
	variant?: "gradient" | "plain";
	className?: string;
	children: React.ReactNode;
}) {
	const H = `h${level}` as const;
	return (
		<H className={headingStyles({ level, variant, className })}>{children}</H>
	);
}
