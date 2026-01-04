import { tv } from "tailwind-variants";

const paragraphStyles = tv({
  variants: {
    size: {
      big: "text-xl",
      small: "text-sm",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export default function Paragraph({
  size,
  className,
  children,
}: {
  size: "big" | "small";
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={paragraphStyles({ size, className })}>{children}</p>;
}
