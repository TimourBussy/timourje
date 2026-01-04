import { HomeCard } from "../components/cards/HomeCard";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

export default function Home({ lang }: { lang: "FR" | "EN" }) {
  return (
    <>
      <Heading level={1} variant="soft" className="mt-7 mb-3.5">
        Timour Jbanov--Emorine
      </Heading>
      <Paragraph size="big" className="mb-15">
        {lang === "FR" ? "Bienvenue chez moi !" : "Welcome to my home!"}
      </Paragraph>

      <div>
        <HomeCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#22d3ee"
            >
              <path d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          }
          iconDecoration="circles"
          title="CV"
          description={
            lang === "FR"
              ? "Découvrez mon parcours, mes compétences et mes expériences professionnelles !"
              : "Discover my background, skills and professional experiences!"
          }
        />
      </div>
    </>
  );
}
