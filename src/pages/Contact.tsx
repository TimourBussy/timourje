import { DescriptionCard } from "../components/cards/DescriptionCard";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import MailIcon from "../assets/icons/mail.svg?react";

export function Contact({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading level={2} variant="gradient">
				Contact
			</Heading>

			<Paragraph size="big" className="my-4">
				{lang === "FR"
					? "N'hésitez pas à me contacter !"
					: "Feel free to reach out to me!"}
			</Paragraph>

			<div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-8 px-6 w-full">
				<div>
					<DescriptionCard
						icon={<MailIcon />}
						iconDecoration="outlinedDiamond"
						title="Email"
						description="timourjbanov@gmail.com"
						size="small"
					/>
				</div>
			</div>
		</>
	);
}
