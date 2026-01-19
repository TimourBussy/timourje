import { forwardRef } from "react";

type CommonProps = {
	children: React.ReactNode;
	className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	CommonProps & {
		href?: undefined;
	};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	CommonProps & {
		href: string;
	};

export const Button = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps | AnchorProps
>((props, ref) => {
	const { children, className = "", ...rest } = props;

	const baseStyle =
		"px-6 py-3 rounded-lg text-base text-white font-medium flex items-center self-center gap-2.5 text-center cursor-default bg-gradient-to-r transition-transform hover:scale-105 from-red-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 " +
		className;

	if ("href" in props && props.href) {
		return (
			<a
				ref={ref as React.Ref<HTMLAnchorElement>}
				className={baseStyle}
				{...(rest as AnchorProps)}
			>
				{children}
			</a>
		);
	}
	return (
		<button
			ref={ref as React.Ref<HTMLButtonElement>}
			className={baseStyle}
			{...(rest as ButtonProps)}
		>
			{children}
		</button>
	);
});
Button.displayName = "Button";
