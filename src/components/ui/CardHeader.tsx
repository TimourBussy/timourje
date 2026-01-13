import { type IconDecoration, IconWrapper } from "./IconWrapper";

export function CardHeader({
	icon,
	iconDecoration,
	title,
}: {
	icon: React.ReactNode;
	iconDecoration: IconDecoration;
	title: string;
}) {
	return (
		<div className="flex items-center mb-2">
			<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
			<h3 className="text-3xl font-bold text-black dark:text-white">{title}</h3>
		</div>
	);
}
