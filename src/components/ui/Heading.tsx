import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "bg-gradient-to-r from-rose-600 to-fuchsia-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent font-bold",
  variants: {
    level: {
      1: "text-5xl",
      2: "text-xl",
    },
  },
});

export default function Heading({
  level,
  className,
  children,
}: {
  level: 1 | 2;
  className?: string;
  children: React.ReactNode;
}) {
  const H = `h${level}` as const;
  return (
    <H
      className={headingStyles({ level }) + (className ? ` ${className}` : "")}
    >
      {children}
    </H>
  );
}
