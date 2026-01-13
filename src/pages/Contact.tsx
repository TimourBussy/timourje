import { Heading } from "../components/ui/Heading";

export function Contact({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={3} variant="soft" className="mt-7">
				CV
			</Heading>
		</>
	);
}
