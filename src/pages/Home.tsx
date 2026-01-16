import { HomeCard } from "../components/cards/HomeCard";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import DocumentIcon from "../assets/icons/document.svg?react";
import BriefcaseIcon from "../assets/icons/briefcase.svg?react";

export function Home({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={2} variant="gradient" className="lg:mt-7 mb-4 mx-8">
				Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
			</Heading>
			<Paragraph size="big" className="mb-16">
				{lang === "FR" ? "Développeur Full Stack" : "Full Stack Developer"}
			</Paragraph>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-5xl mx-auto px-6">
				<a href="CV">
					<HomeCard
						icon={<DocumentIcon height="28px" />}
						iconDecoration="circles"
						title="CV"
						description={
							lang === "FR"
								? "Découvrez mon parcours, mes compétences et mes expériences professionnelles !"
								: "Discover my background, skills and professional experiences!"
						}
					/>
				</a>

				<a href="Portfolio">
					<HomeCard
						icon={<BriefcaseIcon height="36px" />}
						iconDecoration="HaloSquare"
						title="Portfolio"
						description={
							lang === "FR"
								? "Explorez mes projets et réalisations créatives"
								: "Explore my projects and creative achievements"
						}
					/>
				</a>
			</div>
		</>
	);
}
