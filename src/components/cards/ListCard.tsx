import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { ListItem } from "../ui/ListItem";
import { IconWrapper, type IconDecoration } from "../ui/IconWrapper";
import { tv } from "tailwind-variants";

const listGridStyles = tv({
	base: "grid gap-4 mt-6",
	variants: {
		cols: {
			1: "grid-cols-1",
			2: "md:grid-cols-2 lg:grid-cols-2",
			3: "md:grid-cols-2 lg:grid-cols-3",
			4: "md:grid-cols-2 xl:grid-cols-4",
		},
	},
	defaultVariants: {
		cols: 3,
	},
});

export function ListCard({
	icon,
	iconDecoration,
	title,
	listItems,
	cols,
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	listItems: string[] | string[][];
	cols?: 1 | 2 | 3 | 4;
}) {
	return (
		<Card>
			<div className="relative w-full">
				<div className="flex items-center mb-2">
					{icon && iconDecoration && (
						<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
					)}
					<Heading level={3}>{title}</Heading>
				</div>
				<ul className={listGridStyles({ cols })}>
					{listItems.map((item, index) => (
						<ListItem key={index}>{item}</ListItem>
					))}
				</ul>
			</div>
		</Card>
	);
}
