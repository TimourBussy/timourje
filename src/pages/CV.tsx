import { Heading } from "../components/ui/Heading";
import { DescriptionCard } from "../components/cards/DescriptionCard";
import { ListCard } from "../components/cards/ListCard";
import { TimelineCard } from "../components/cards/TimelineCard";
import UserIcon from "../assets/icons/user.svg?react";
import BracketsIcon from "../assets/icons/brackets.svg?react";
import BriefcaseIcon from "../assets/icons/briefcase.svg?react";
import HeartIcon from "../assets/icons/heart.svg?react";
import GraduationCapIcon from "../assets/icons/graduation-cap.svg?react";

export function CV({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={2} variant="gradient" className="mb-12">
				Curriculum Vitae
			</Heading>

			<div className="flex flex-col gap-12 max-w-screen-xl box-border px-4 sm:px-6 md:px-16 lg:px-32 xl:px-40 mb-24">
				<DescriptionCard
					icon={<UserIcon />}
					iconDecoration="filledDiamond"
					title={lang === "FR" ? "À propos" : "About"}
					description={
						lang === "FR"
							? [
									"Je suis un développeur spécialisé dans le développement full-stack avec React + TypeScript + TailwindCSS. Je cherche toujours à me dépasser pour proposer le meilleur résultat possible à mes clients.",
									"N'hésitez pas à me contacter pour toute demande professionnelle !",
								]
							: [
									"I am a developer specialized in full-stack development with React + TypeScript + TailwindCSS. I always strive to exceed expectations to deliver the best possible results to my clients.",
									"Feel free to contact me for any professional inquiries!",
								]
					}
				/>

				<ListCard
					icon={<BracketsIcon />}
					iconDecoration="glitchedSquare"
					title={lang === "FR" ? "Compétences" : "Skills"}
					listItems={[
						"React",
						"TypeScript",
						"Node.js",
						"Python",
						"TailwindCSS",
						"Git",
					]}
				/>

				<TimelineCard
					icon={<BriefcaseIcon />}
					iconDecoration="hexagon"
					title={
						lang === "FR"
							? "Expériences professionnelles"
							: "Professional Experience"
					}
					entries={[
						{
							title: lang === "FR" ? "Stagiaire" : "Intern",
							organization: "MayetSoft",
							period: "2026",
							description:
								lang === "FR" ? (
									<>
										Développement de mini-jeux autour du rythme, de l’harmonie
										et de la mélodie, en s’appuyant sur l’architecture existante
										sous PixiJS.
									</>
								) : (
									<>
										Development of mini-games focused on rhythm, harmony, and
										melody, leveraging the existing architecture under PixiJS.
									</>
								),
						},
					]}
				/>

				<ListCard
					icon={<HeartIcon />}
					iconDecoration="beatingCircle"
					title={lang === "FR" ? "Centres d'intérêts" : "Interests"}
					listItems={[
						["👺", lang === "FR" ? "Culture japonaise" : "Japanese culture"],
						["🎮", lang === "FR" ? "Jeux vidéo" : "Video games"],
						["💻", lang === "FR" ? "Informatique" : "Computing"],
						["🎤", lang === "FR" ? "Chant" : "Singing"],
					]}
					cols={4}
				/>

				<TimelineCard
					icon={<GraduationCapIcon />}
					iconDecoration="dashedCircle"
					title="Formations"
					entries={[
						{
							title:
								lang === "FR" ? "Bacalauréat Général" : "General Baccalaureate",
							organization:
								lang === "FR"
									? "Lycée Théodore de Banville"
									: "Théodore de Banville High School",
							period: "2021-2024",
							description:
								lang === "FR" ? (
									<>
										Spécialité Numérique et Sciences Informatiques et
										Mathématiques
										<br />+ Option Maths Expertes
									</>
								) : (
									<>
										Specialization in Digital and Computer Sciences and
										Mathematics
										<br />+ Expert Maths Option
									</>
								),
						},
						{
							title:
								lang === "FR"
									? "BUT Métiers du Multimédia et de l'Internet"
									: "Bachelor's Degree in Multimedia and Internet Professions",
							organization:
								lang === "FR"
									? "Université Clermont Auvergne"
									: "Clermont Auvergne University",
							period: "2024-2027",
							description:
								lang === "FR" ? (
									<>Parcours Développement Web et Dispositifs Interactifs</>
								) : (
									<>Web Development and Interactive Devices Track</>
								),
						},
					]}
				/>
			</div>
		</>
	);
}
