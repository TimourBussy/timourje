import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { Heading } from "../ui/Heading";
import { type IconDecoration } from "../ui/IconWrapper";
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
	icon: React.ReactNode;
	iconDecoration: IconDecoration;
	title: string;
	entries: TimelineEntry[];
}) {
	return (
		<Card>
			<div className="relative">
				<CardHeader
					icon={icon}
					iconDecoration={iconDecoration}
					title={title}
					className="mb-2"
				/>
				<div className="space-y-6 mt-5 ml-1.5">
					{[...entries].reverse().map((entry, index) => (
						<article
							key={index}
							className="
								px-6 py-2 border-l-4
								border-red-500 text-gray-600
								dark:border-cyan-500 dark:text-gray-300"
						>
							<div className="space-y-1">
								<Heading level={4}>{entry.title}</Heading>
								<Paragraph
									size="small"
									className="
                                    text-red-600
                                    dark:text-cyan-400"
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
		</Card>
	);
}
