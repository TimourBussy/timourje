import { tv } from "tailwind-variants";

const paragraphStyles = tv({
	variants: {
		size: {
			big: "text-lg",
			small: "text-md",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

export function Paragraph({
	size,
	className,
	children,
}: {
	size: "big" | "small";
	className?: string;
	children: React.ReactNode;
}) {
	return <p className={paragraphStyles({ size, className })}>{children}</p>;
}
