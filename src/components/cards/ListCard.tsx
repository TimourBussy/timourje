import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { type IconDecoration } from "../ui/IconWrapper";

export function ListCard({
	icon,
	iconDecoration,
	title,
	listItems,
}: {
	icon: React.ReactNode;
	iconDecoration: IconDecoration;
	title: string;
	listItems: string[];
}) {
	return (
		<Card>
			<div className="relative">
				<CardHeader icon={icon} iconDecoration={iconDecoration} title={title} />
				<div className="text-gray-600 dark:text-gray-300">
					{listItems.map((item, index) => (
						<p
							key={index}
							className={index < listItems.length - 1 ? "mb-4" : ""}
						>
							{item}
						</p>
					))}
				</div>
			</div>
		</Card>
	);
}
