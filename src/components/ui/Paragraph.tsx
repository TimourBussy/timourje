import { tv } from "tailwind-variants";

const paragraphStyles = tv({
  variants: {
    size: {
      big: "text-lg",
      small: "text-sm",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export default function Heading({
  size,
  children,
}: {
  size: "big" | "small";
  children: React.ReactNode;
}) {
  return <p className={paragraphStyles({ size })}>{children}</p>;
}
