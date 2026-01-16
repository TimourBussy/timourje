import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";

export function Contact({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={3} variant="soft">
				Contact
			</Heading>

			<Paragraph size="big" className="mt-4">
				{lang === "FR"
					? "N'hésitez pas à me contacter !"
					: "Feel free to reach out to me!"}
			</Paragraph>
		</>
	);
}
