import { Card } from "../ui/Card";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Tag } from "../ui/Tag";
import ExternalLinkIcon from "../../assets/icons/external-link.svg?react";

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
			<div className="flex flex-col xl:flex-row h-full">
				<div
					className={`flex-1 order-1 ${
						imagePosition === "right" ? "xl:order-2" : "xl:order-1"
					}`}
				>
					<img
						src={imageSrc}
						alt={imageAlt}
						className="w-full h-full object-cover"
					/>
				</div>

				<div
					className={`flex-1 flex flex-col gap-4 p-6 md:p-8 order-2 ${
						imagePosition === "right" ? "xl:order-1" : "xl:order-2"
					}`}
				>
					<div className="flex items-center gap-2">
						<div
							className="
								w-2 h-2 rounded-full bg-gradient-to-r
								from-red-500 to-pink-500
								dark:from-cyan-500 dark:to-purple-500"
						/>
						<span
							className="
								text-sm
								text-red-600
								dark:text-cyan-300"
						>
							{lang === "FR" ? "Projet " : "Project "} #{id}
						</span>
					</div>

					<Heading level={3}>{title}</Heading>

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
							px-6 py-3 rounded-lg text-white font-medium flex items-center self-center gap-2.5 text-center cursor-default bg-gradient-to-r transition-transform hover:scale-105
							from-red-500 to-pink-500
							dark:from-cyan-500 dark:to-purple-500"
					>
						<ExternalLinkIcon className="w-3.5 h-3.5 translate-y-0.25" />
						{lang === "FR" ? "Voir le projet" : "View Project"}
					</a>
				</div>
			</div>
		</Card>
	);
}
