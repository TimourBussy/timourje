import { type IconDecoration, IconWrapper } from "./IconWrapper";

export function CardHeader({
	icon,
	iconDecoration,
	title,
	className,
}: {
	icon?: React.ReactNode;
	iconDecoration?: IconDecoration;
	title: string;
	className?: string;
}) {
	return (
		<div className="flex items-center">
			{icon && iconDecoration && (
				<IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
			)}
			<h3
				className={`text-3xl font-bold text-black dark:text-white ${className}`}
			>
				{title}
			</h3>
		</div>
	);
}
