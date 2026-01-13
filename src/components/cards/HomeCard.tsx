import { Card } from "../ui/Card";
import { type IconDecoration, IconWrapper } from "../ui/IconWrapper";

export function HomeCard({
	icon,
	iconDecoration,
	title,
	description,
}: {
	icon: React.ReactNode;
	iconDecoration: IconDecoration;
	title: string;
	description: string;
}) {
	return (
		<Card
			className="
				lg:w-108 relative h-full hover:shadow-2xl hover:-translate-y-2
				shadow-red-500/20
				dark:shadow-cyan-500/20"
		>
			<div
				className="
					absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br
					from-red-500/10 to-red-500/0
					dark:from-cyan-500/10 dark:to-cyan-500/0"
			/>

			<div className="relative">
				<IconWrapper decoration={iconDecoration} className="mb-5">
					{icon}
				</IconWrapper>
				<h3
					className="
						text-3xl font-bold mb-2
						text-black
						dark:text-white"
				>
					{title}
				</h3>
				<p
					className="
						text-gray-600
						dark:text-gray-300"
				>
					{description}
				</p>
			</div>
		</Card>
	);
}
