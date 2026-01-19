import { forwardRef } from "react";
import { FieldBox } from "./FieldBox";

export const Input = forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
	<FieldBox>
		<input
			ref={ref}
			className={
				"px-4 py-3 w-full h-full bg-transparent border-none outline-none " +
				(props.className || "")
			}
			{...props}
		/>
	</FieldBox>
));
Input.displayName = "Input";
