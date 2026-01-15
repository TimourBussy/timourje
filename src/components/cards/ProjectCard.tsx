import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { Paragraph } from "../ui/Paragraph";
import { Tag } from "../ui/Tag";

export function ProjectCard({
	id,
	title,
	description,
	tags,
	imageSrc,
	imageAlt,
	imagePosition = "left",
	projectUrl,
	lang = "EN",
}: {
	id: number;
	title: string;
	description: string;
	tags: string[];
	imageSrc: string;
	imageAlt: string;
	imagePosition?: "left" | "right";
	projectUrl: string;
	lang?: "FR" | "EN";
}) {
	return (
		<Card className="!p-0 overflow-hidden">
			<div className="flex h-full">
				<div
					className={`flex-1 ${
						imagePosition === "right" ? "order-2" : "order-1"
					}`}
				>
					<img
						src={imageSrc}
						alt={imageAlt}
						className="w-full h-full object-cover"
					/>
				</div>

				<div
					className={`flex-1 flex flex-col gap-4 p-6 md:p-8 ${
						imagePosition === "right" ? "order-1" : "order-2"
					}`}
				>
					<div className="flex items-center gap-2">
						<div
							className="
								w-2 h-2 rounded-full bg-gradient-to-r
								from-red-500 to-pink-500
								dark:from-cyan-500 dark:to-purple-500"
						/>
						<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
							{lang === "FR" ? "Projet " : "Project "} #{id}
						</span>
					</div>

					<CardHeader title={title} />

					<Paragraph size="small" className="mb-2">
						{description}
					</Paragraph>

					<ul className="flex flex-wrap gap-2 mb-2">
						{tags.map((tag, index) => (
							<Tag key={index}>{tag}</Tag>
						))}
					</ul>

					<a
						href={projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="
							px-6 py-2 rounded-lg text-white font-medium self-start inline-block text-center bg-gradient-to-r transition-opacity hover:opacity-90
							from-red-500 to-pink-500
							dark:from-cyan-500 dark:to-purple-500"
					>
						{lang === "FR" ? "Voir le projet" : "View Project"}
					</a>
				</div>
			</div>
		</Card>
	);
}
