import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
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
	size = "big",
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	listItems: (string | React.ReactNode)[] | (string | React.ReactNode)[][];
	cols?: 1 | 2 | 3 | 4;
	size?: "big" | "small";
}) {
	const isSmall = size === "small";

	return (
		<Card>
			<div className="relative">
				<div className={`flex flex-col items-center ${!isSmall ? "mb-2" : ""}`}>
					{icon && iconDecoration && (
						<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
					)}
					<Heading
						level={!isSmall ? 3 : 5}
						className={isSmall ? "text-center md:text-left w-full" : ""}
					>
						{title}
					</Heading>
				</div>
				<ul
					className={
						isSmall
							? "flex items-center gap-4 mt-4 w-full justify-center md:justify-start flex-wrap"
							: listGridStyles({ cols })
					}
				>
					{listItems.map((item, index) => (
						<li
							key={index}
							className={`
								   ${!isSmall ? "p-3" : ""}
								   text-center rounded-lg border bg-gradient-to-br transition-all hover:scale-105
								   text-slate-800 border-red-200 from-red-50 to-pink-50
								   dark:text-inherit dark:border-cyan-700/30 dark:from-cyan-900/20 dark:to-purple-900/20
							   `}
						>
							{Array.isArray(item) ? (
								<div className="flex flex-col gap-2">
									{item.map((sub, i) => (
										<span key={i} className={i === 0 ? "text-2xl" : "text-sm"}>
											{sub}
										</span>
									))}
								</div>
							) : (
								item
							)}
						</li>
					))}
				</ul>
			</div>
		</Card>
	);
}
