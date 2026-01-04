import Heading from "../components/ui/Heading";

export default function Portfolio({ lang }: { lang: "FR" | "EN" }) {
  return (
    <>
      <Heading level={3} variant="soft" className="mt-7">
        Portfolio
      </Heading>
    </>
  );
}
