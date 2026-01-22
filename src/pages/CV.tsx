import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import Card from "../components/ui/Card";
import { Fragment } from "react";
import UserIcon from "../icons/user.svg?react";
import BracketsIcon from "../icons/brackets.svg?react";
import BriefcaseIcon from "../icons/briefcase.svg?react";
import HeartIcon from "../icons/heart.svg?react";
import GraduationCapIcon from "../icons/graduation-cap.svg?react";

export function CV({ lang }: { lang: "FR" | "EN" }) {
  const { t } = useTranslation();

  const experience = t("cv.cards.experience.entries", {
    returnObjects: true,
  }) as {
    title: string;
    organization: string;
    period: string;
    description: string;
  }[];
  const formations = t("cv.cards.formations.entries", {
    returnObjects: true,
  }) as {
    title: string;
    organization: string;
    period: string;
    description: string[];
  }[];
  const interests = t("cv.cards.interests.items", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <Heading level={2} variant="gradient" className="mb-12">
        Curriculum Vitae
      </Heading>

      <div className="flex flex-col gap-12 max-w-screen-xl box-border px-4 sm:px-6 md:px-16 lg:px-32 xl:px-40 mb-24">
        <Card.Description
          icon={<UserIcon />}
          iconDecoration="filledDiamond"
          title={t("cv.cards.about.title")}
          description={
            t("cv.cards.about.description", { returnObjects: true }) as string[]
          }
        />

        <Card.List
          icon={<BracketsIcon />}
          iconDecoration="glitchedSquare"
          title={t("cv.cards.skills.title")}
          listItems={[
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "TailwindCSS",
            "Git",
          ]}
        />

        <Card.Timeline
          icon={<BriefcaseIcon />}
          iconDecoration="hexagon"
          title={t("cv.cards.experience.title")}
          entries={experience.map((exp) => ({
            title: exp.title,
            organization: exp.organization,
            period: exp.period,
            description: Array.isArray(exp.description)
              ? exp.description.filter(Boolean).map((desc, i, arr) => (
                  <Fragment key={i}>
                    {desc}
                    {i < arr.length - 1 && <br />}
                  </Fragment>
                ))
              : exp.description || "",
          }))}
        />

        <Card.List
          icon={<HeartIcon />}
          iconDecoration="beatingCircle"
          title={lang === "FR" ? "Centres d'intérêts" : "Interests"}
          listItems={[
            ["👺", interests[0]],
            ["🎮", interests[1]],
            ["💻", interests[2]],
            ["🎤", interests[3]],
          ]}
          cols={4}
        />

        <Card.Timeline
          icon={<GraduationCapIcon />}
          iconDecoration="dashedCircle"
          title="Formations"
          entries={formations.map((formation) => ({
            title: formation.title,
            organization: formation.organization,
            period: formation.period,
            description: Array.isArray(formation.description)
              ? formation.description.filter(Boolean).map((desc, i, arr) => (
                  <Fragment key={i}>
                    {desc}
                    {i < arr.length - 1 && <br />}
                  </Fragment>
                ))
              : formation.description || "",
          }))}
        />
      </div>
    </>
  );
}
