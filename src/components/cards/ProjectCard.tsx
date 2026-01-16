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
						<span
							className="
								text-sm
								text-red-600
								dark:text-cyan-300"
						>
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
							px-6 py-3 rounded-lg text-white font-medium flex items-center self-center gap-2.5 text-center bg-gradient-to-r transition-opacity hover:opacity-90
							from-red-500 to-pink-500
							dark:from-cyan-500 dark:to-purple-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							fill="currentColor"
							className="w-3.5 h-3.5 translate-y-0.25"
						>
							<g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
								<path d="M 84 37.02 c -3.313 0 -6 -2.687 -6 -6 V 12 H 58.98 c -3.313 0 -6 -2.687 -6 -6 s 2.687 -6 6 -6 H 84 c 3.313 0 6 2.687 6 6 v 25.02 C 90 34.333 87.313 37.02 84 37.02 z" />
								<path d="M 33.961 62.039 c -1.536 0 -3.071 -0.586 -4.243 -1.758 c -2.343 -2.343 -2.343 -6.142 0 -8.484 l 50.039 -50.04 c 2.342 -2.343 6.143 -2.343 8.484 0 c 2.344 2.343 2.344 6.142 0 8.485 L 38.204 60.281 C 37.033 61.453 35.497 62.039 33.961 62.039 z" />
								<path d="M 73.658 90 H 16.341 C 7.331 90 0 82.669 0 73.658 V 16.341 C 0 7.331 7.331 0 16.341 0 h 17.62 c 3.313 0 6 2.687 6 6 s -2.687 6 -6 6 h -17.62 C 13.947 12 12 13.947 12 16.341 v 57.317 C 12 76.053 13.947 78 16.341 78 h 57.317 C 76.053 78 78 76.053 78 73.658 V 56.039 c 0 -3.313 2.687 -6 6 -6 s 6 2.687 6 6 v 17.619 C 90 82.669 82.669 90 73.658 90 z" />
							</g>
						</svg>
						{lang === "FR" ? "Voir le projet" : "View Project"}
					</a>
				</div>
			</div>
		</Card>
	);
}
