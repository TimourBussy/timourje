import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { type IconDecoration } from "../ui/IconWrapper";
import { Paragraph } from "../ui/Paragraph";

export function DescriptionCard({
	icon,
	iconDecoration,
	title,
	description,
}: {
	icon: React.ReactNode;
	iconDecoration: IconDecoration;
	title: string;
	description: string | string[];
}) {
	const descriptionArray = Array.isArray(description)
		? description
		: [description];

	return (
		<Card>
			<div className="relative">
				<CardHeader
					icon={icon}
					iconDecoration={iconDecoration}
					title={title}
					className="mb-2"
				/>
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
		</Card>
	);
}
