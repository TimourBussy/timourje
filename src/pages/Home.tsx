import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import Card from "../components/ui/Card";
import DocumentIcon from "../assets/icons/document.svg?react";
import BriefcaseIcon from "../assets/icons/briefcase.svg?react";

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Heading level={1} variant="gradient" className="lg:mt-7 mb-4 mx-8">
        Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
      </Heading>
      <Paragraph size="big" className="mb-16">
        {t("home.subtitle")}
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-5xl px-4 grid-rows-2 md:grid-rows-1 mb-14 box-border">
        <a href="CV">
          <Card.Home
            icon={<DocumentIcon height="28px" />}
            iconDecoration="circles"
            title="CV"
            description={t("home.cards.cv.description")}
          />
        </a>

        <a href="Portfolio">
          <Card.Home
            icon={<BriefcaseIcon height="36px" />}
            iconDecoration="haloSquare"
            title="Portfolio"
            description={t("home.cards.portfolio.description")}
          />
        </a>
      </div>
    </>
  );
}
