import { HomeCard } from "../components/cards/HomeCard";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";

export function Home({ lang }: { lang: "FR" | "EN" }) {
	return (
		<>
			<Heading
				level={1}
				variant="soft"
				className="lg:mt-7 mb-3.5 mx-8 text-center"
			>
				Timour <span className="whitespace-nowrap">Jbanov--Emorine</span>
			</Heading>
			<Paragraph size="big" className="mb-15">
				{lang === "FR" ? "Développeur Full Stack" : "Full Stack Developer"}
			</Paragraph>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-5xl mx-auto px-6">
				<a href="CV">
					<HomeCard
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="28px"
								viewBox="0 -960 960 960"
								fill="currentColor"
							>
								<path d="M319-445h322v-75H319v75Zm0 112.5h322v-75H319v75Zm0 112.5h202v-75H319v75ZM244-90q-30.94 0-52.97-22.03Q169-134.06 169-165v-630q0-30.94 22.03-52.97Q213.06-870 244-870h316l231 230.5V-165q0 30.94-22.03 52.97Q746.94-90 716-90H244Zm279-512v-193H244v630h472v-437H523ZM244-795v193-193 630-630Z" />
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
				</a>

				<a href="Portfolio">
					<HomeCard
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="36px"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M8 7V6.2C8 5.0799 8 4.51984 8.21799 4.09202C8.40973 3.71569 8.71569 3.40973 9.09202 3.21799C9.51984 3 10.0799 3 11.2 3H12.8C13.9201 3 14.4802 3 14.908 3.21799C15.2843 3.40973 15.5903 3.71569 15.782 4.09202C16 4.51984 16 5.0799 16 6.2V7M7 21V7.00169M17 21V7M7 7.00169C7.24373 7 7.50929 7 7.8 7H16M7 7.00169C5.83507 7.00979 5.16873 7.05658 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H17M17 7H16"
									stroke="currentColor"
									stroke-width="2"
								></path>
							</svg>
						}
						iconDecoration="HaloSquare"
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
