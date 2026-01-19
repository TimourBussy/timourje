import { forwardRef } from "react";
import { FieldBox } from "./FieldBox";

export const TextField = forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
	<FieldBox>
		<textarea
			ref={ref}
			className={
				"px-4 py-3 w-full min-h-[3rem] bg-transparent border-none outline-none resize-none " +
				(props.className || "")
			}
			{...props}
		/>
	</FieldBox>
));
TextField.displayName = "TextField";
