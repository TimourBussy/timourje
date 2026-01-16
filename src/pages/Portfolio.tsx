import { ProjectCard } from "../components/cards/ProjectCard";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import { projects } from "../data/projects";

export function Portfolio({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={2} variant="gradient">
				Portfolio
			</Heading>
			<Paragraph size="big" className="my-4">
				{lang === "FR"
					? "Découvrez mes projets et réalisations"
					: "Discover my projects and achievements"}
			</Paragraph>

			<div className="flex flex-col gap-6 mt-8 mb-12 mx-4 sm:mx-16 md:mx-32 lg:mx-55">
				{projects.map((project, index) => {
					const title =
						typeof project.title === "string"
							? project.title
							: project.title[lang];
					return (
						<ProjectCard
							key={index}
							id={index + 1}
							imageSrc={
								project.imageSrc || `src/assets/images/project${index + 1}.webp`
							}
							title={title}
							description={
								typeof project.description === "string"
									? project.description
									: project.description[lang]
							}
							imageAlt={
								project.imageAlt
									? typeof project.imageAlt === "string"
										? project.imageAlt
										: project.imageAlt[lang]
									: lang === "FR"
									? `Aperçu du projet "${title}"`
									: `Preview of the "${title}" project`
							}
							tags={project.tags}
							imagePosition={
								project.imagePosition || (index % 2 === 0 ? "left" : "right")
							}
							projectUrl={project.projectUrl}
							lang={lang}
						/>
					);
				})}
			</div>
		</>
	);
}
