import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { type IconDecoration } from "../ui/IconWrapper";

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
				<CardHeader icon={icon} iconDecoration={iconDecoration} title={title} />
				<div className="text-gray-600 dark:text-gray-300">
					{descriptionArray.map((paragraph, index) => (
						<p
							key={index}
							className={index < descriptionArray.length - 1 ? "mb-4" : ""}
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</Card>
	);
}
