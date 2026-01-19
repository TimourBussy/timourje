import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { IconWrapper, type IconDecoration } from "../ui/IconWrapper";
import { Paragraph } from "../ui/Paragraph";

type TimelineEntry = {
	title: string;
	organization: string;
	period: string;
	description: React.ReactNode;
};

export function TimelineCard({
	icon,
	iconDecoration,
	title,
	entries,
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	entries: TimelineEntry[];
}) {
	return (
		<Card>
			<Card.Body>
				<div className="relative">
					<div className="flex items-center mb-2">
						{icon && iconDecoration && (
							<Card.Icon>
								<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
							</Card.Icon>
						)}
						<Card.Title>
							<Heading level={3}>{title}</Heading>
						</Card.Title>
					</div>
					<div className="space-y-6 mt-5 ml-1.5">
						{[...entries].reverse().map((entry, index) => (
							<article
								key={index}
								className="
									px-2 sm:px-6 py-2 border-l-4
									border-red-500 text-gray-600
									dark:border-cyan-500 dark:text-gray-300"
							>
								<div className="space-y-1">
									<Heading level={4}>{entry.title}</Heading>
									<Paragraph
										size="small"
										className="text-red-600 dark:text-cyan-400"
									>
										{entry.organization} • {entry.period}
									</Paragraph>
									<Paragraph size="small" className="mt-2">
										{entry.description}
									</Paragraph>
								</div>
							</article>
						))}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
