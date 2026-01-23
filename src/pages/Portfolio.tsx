import { useTranslation } from "react-i18next";
import Card from "../components/ui/Card";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import { Button } from "../components/ui/Button";
import ExternalLinkIcon from "../icons/external-link.svg?react";

export function Portfolio() {
	const { t } = useTranslation();

	const projects = t("portfolio.projects", { returnObjects: true }) as {
		title: string;
		description: string;
		tags?: string[];
		img: { src: string; alt: string };
		url: string;
	}[];

	return (
		<>
			<Heading level={2} variant="gradient">
				Portfolio
			</Heading>
			<Paragraph size="big" className="my-4">
				{t("home.cards.portfolio.description")}
			</Paragraph>

			<div className="flex flex-col gap-6 mt-8 mb-12 px-4 sm:px-6 md:px-16 lg:px-32 xl:px-70 box-border">
				{projects.map((project, index) => {
					const { title, description, tags, img, url } = project;
					const imagePosition = index % 2 === 0 ? "right" : "left";
					return (
						<Card key={index} className="!p-0 overflow-hidden">
							<div className="flex flex-col xl:flex-row h-full">
								<div
									className={`flex-1 order-1 ${
										imagePosition === "right" ? "xl:order-2" : "xl:order-1"
									}`}
								>
									<img
										src={`/images/${img.src}`}
										alt={img.alt}
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
											{t("portfolio.projectId")} #{index + 1}
										</span>
									</div>

									<Heading level={3}>{title}</Heading>

									<Paragraph size="small" className="mb-2">
										{description}
									</Paragraph>

									{tags && (
										<ul className="flex flex-wrap gap-2 mb-2">
											{tags.map((tag, tagIndex) => (
												<li
													key={tagIndex}
													className="
																  px-3 py-1 text-sm text-center rounded-full cursor-default border bg-gradient-to-br transition-all hover:scale-105
																  text-red-600 border-red-200 from-red-50 to-pink-50
																  dark:text-cyan-300 dark:border-cyan-700/30 dark:from-cyan-900/20 dark:to-purple-900/20
															  "
												>
													{tag}
												</li>
											))}
										</ul>
									)}

									<Button
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										className="
													  px-6 py-3 rounded-lg text-white font-medium flex gap-2.5 self-start text-center cursor-default bg-gradient-to-r transition-transform hover:scale-105
													  from-red-500 to-pink-500
													  dark:from-cyan-500 dark:to-purple-500"
									>
										<ExternalLinkIcon className="w-3.5 h-3.5 translate-y-0.25" />
										{t("portfolio.viewProject")}
									</Button>
								</div>
							</div>
						</Card>
					);
				})}
			</div>
		</>
	);
}
