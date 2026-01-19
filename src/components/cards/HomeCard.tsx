import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { type IconDecoration, IconWrapper } from "../ui/IconWrapper";
import { Paragraph } from "../ui/Paragraph";

export function HomeCard({
	icon,
	iconDecoration,
	title,
	description,
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	description: string;
}) {
	return (
		<Card
			className="
				lg:w-md relative h-full hover:shadow-2xl hover:-translate-y-2
				shadow-red-500/20
				dark:shadow-cyan-500/20"
		>
			<div
				className="
					absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br
					from-red-500/10 to-red-500/0
					dark:from-cyan-500/10 dark:to-cyan-500/0"
			/>

			<div className="relative flex flex-col items-start w-auto">
				{icon && iconDecoration && (
					<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
				)}
				<Heading level={2} className="text-3xl mt-4 mb-2 text-left">
					{title}
				</Heading>
				<Paragraph size="small">{description}</Paragraph>
			</div>
		</Card>
	);
}
