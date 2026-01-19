import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { type IconDecoration, IconWrapper } from "../ui/IconWrapper";
import { Paragraph } from "../ui/Paragraph";

export function DescriptionCard({
	icon,
	iconDecoration,
	title,
	description,
	size = "big",
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	description: string | string[];
	size?: "big" | "small";
}) {
	const descriptionArray = Array.isArray(description)
		? description
		: [description];

	const isSmall = size === "small";

	return (
		<Card size={size}>
			<div
				className={
					isSmall
						? "flex flex-col items-center justify-center text-center md:text-left md:flex-row"
						: "w-full"
				}
			>
				{icon && iconDecoration && (
					<div
						className={`flex mb-2
							${isSmall ? "justify-center md:items-center" : "items-center"}`}
					>
						<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
						{!isSmall && <Heading level={3}>{title}</Heading>}
					</div>
				)}
				<div
					className={isSmall ? "flex flex-col items-center w-full" : undefined}
				>
					{isSmall && (
						<Heading level={5} className="text-center md:text-left w-full">
							{title}
						</Heading>
					)}
					{descriptionArray.map((paragraph, index) => (
						<Paragraph
							key={index}
							size="small"
							className={`
								${index < descriptionArray.length - 1 ? "mb-4" : ""}
								${isSmall ? "w-full" : ""}
							`}
						>
							{paragraph}
						</Paragraph>
					))}
				</div>
			</div>
		</Card>
	);
}
