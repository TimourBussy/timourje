export interface Project {
  id: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
  projectUrl: string;
}

export const projects = [
  {
    id: "yamsy",
    imageSrc: "project_yamsy.png",
    projectUrl: "https://scep.prox.dsi.uca.fr/vm-iutvy-mmiweb-68/yamsy/",
  },
];
