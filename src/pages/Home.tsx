import Card from "../components/ui/Card";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import DocumentIcon from "../assets/icons/document.svg?react";
import BriefcaseIcon from "../assets/icons/briefcase.svg?react";

export function Home({ lang }: { lang: "FR" | "EN" }) {
  return (
    <>
      <Heading level={1} variant="gradient" className="lg:mt-7 mb-4 mx-8">
        Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
      </Heading>
      <Paragraph size="big" className="mb-16">
        {lang === "FR" ? "Développeur Full Stack" : "Full Stack Developer"}
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-5xl px-4 grid-rows-2 md:grid-rows-1 mb-14 box-border">
        <a href="CV">
          <Card.Home
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
          <Card.Home
            icon={<BriefcaseIcon height="36px" />}
            iconDecoration="haloSquare"
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
