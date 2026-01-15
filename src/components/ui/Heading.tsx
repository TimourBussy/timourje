import { tv } from "tailwind-variants";

const headingStyles = tv({
	base: "font-bold",
	variants: {
		level: {
			1: "text-4xl sm:text-5xl md:text-6xl text-center",
			2: "text-xl",
			3: "text-5xl text-center",
			4: "text-xl",
		},
		variant: {
			vibrant: `
				bg-gradient-to-r bg-clip-text text-transparent
				from-red-600 to-pink-600
				dark:from-cyan-500 dark:to-purple-500`,
			soft: `
				bg-gradient-to-r bg-clip-text text-transparent
				from-rose-600 to-fuchsia-600
				dark:from-blue-300 dark:to-fuchsia-400`,
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
	level: 1 | 2 | 3 | 4;
	variant?: "vibrant" | "soft" | "plain";
	className?: string;
	children: React.ReactNode;
}) {
	const H = `h${level}` as const;
	return (
		<H className={headingStyles({ level, variant, className })}>{children}</H>
	);
}
