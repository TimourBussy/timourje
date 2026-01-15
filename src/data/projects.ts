export interface Project {
	title: string | { FR: string; EN: string };
	description: string | { FR: string; EN: string };
	tags: string[];
	imageSrc?: string;
	imageAlt?: string | { FR: string; EN: string };
	imagePosition?: "left" | "right";
	projectUrl: string;
}

export const projects: Project[] = [
	{
		title: "YAMSY",
		description: {
			FR: `Application web permettant de jouer au Yams (Yahtzee) de 1 à 4 joueurs en mode "hot seat"`,
			EN: `Web application allowing 1 to 4 players to play Yams (Yahtzee) in "hot seat" mode`,
		},
		tags: ["PHP", "CSS", "JavaScript", "MySQL"],
		projectUrl: "https://scep.prox.dsi.uca.fr/vm-iutvy-mmiweb-68/yamsy/",
	},
];
