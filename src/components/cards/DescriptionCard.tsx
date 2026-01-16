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
		<Card>
			<div className={isSmall ? "flex items-start gap-4" : "relative"}>
				{isSmall && icon && iconDecoration && (
					<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
				)}
				<div className={isSmall ? "flex-1" : ""}>
					<div className={`flex items-center ${!isSmall ? "mb-2" : ""}`}>
						{!isSmall && icon && iconDecoration && (
							<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
						)}
						<Heading level={!isSmall ? 3 : 4}>{title}</Heading>
					</div>
					{descriptionArray.map((paragraph, index) => (
						<Paragraph
							key={index}
							size="small"
							className={index < descriptionArray.length - 1 ? "mb-4" : ""}
						>
							{paragraph}
						</Paragraph>
					))}
				</div>
			</div>
		</Card>
	);
}
