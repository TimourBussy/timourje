import Heading from "../components/ui/Heading";

export default function CV({ lang }: { lang: "FR" | "EN" }) {
  return (
    <>
      <Heading level={3} variant="soft" className="mt-7">
        CV
      </Heading>
    </>
  );
}
