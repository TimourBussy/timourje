import { Heading } from "../components/ui/Heading";
import { DescriptionCard } from "../components/cards/DescriptionCard";
import { ListCard } from "../components/cards/ListCard";

export function CV({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={3} variant="soft" className="mb-12">
				Curriculum Vitae
			</Heading>

			<div className="flex flex-col gap-12 mx-70">
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
			</div>
		</>
	);
}
