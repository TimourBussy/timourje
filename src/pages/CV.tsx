import { Heading } from "../components/ui/Heading";
import { DescriptionCard } from "../components/cards/DescriptionCard";
import { ListCard } from "../components/cards/ListCard";
import { TimelineCard } from "../components/cards/TimelineCard";

export function CV({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={3} variant="soft" className="mb-12">
				Curriculum Vitae
			</Heading>

			<div className="flex flex-col gap-12 sm:px-6 md:px-16 lg:px-32 xl:px-70 mb-24">
				<DescriptionCard
					icon={
						<svg
							viewBox="-2.4 -2.4 28.80 28.80"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							fill="none"
						>
							<path
								d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
								stroke="currentColor"
								stroke-width="2"
							/>
						</svg>
					}
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
					icon={
						<svg
							fill="none"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="9,6 4,12 9,18" />
							<polyline points="15,6 20,12 15,18" />
						</svg>
					}
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
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M8 7V6.2C8 5.0799 8 4.51984 8.21799 4.09202C8.40973 3.71569 8.71569 3.40973 9.09202 3.21799C9.51984 3 10.0799 3 11.2 3H12.8C13.9201 3 14.4802 3 14.908 3.21799C15.2843 3.40973 15.5903 3.71569 15.782 4.09202C16 4.51984 16 5.0799 16 6.2V7M7 21V7.00169M17 21V7M7 7.00169C7.24373 7 7.50929 7 7.8 7H16M7 7.00169C5.83507 7.00979 5.16873 7.05658 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H17M17 7H16"
								stroke="currentColor"
								stroke-width="2"
							/>
						</svg>
					}
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
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 475.528 475.528"
							fill="currentColor"
						>
							<path d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706 c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953 C-54.844,154.658,26.437,351.092,237.376,436.245z"></path>
						</svg>
					}
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
					icon={
						<svg
							fill="currentColor"
							viewBox="-5 0 32 32"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							transform="matrix(-1, 0, 0, 1, 0, 0)"
						>
							<path d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z"></path>{" "}
						</svg>
					}
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
