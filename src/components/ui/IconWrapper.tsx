import { tv } from "tailwind-variants";

export type IconDecoration =
  | "circles"
  | "glowRectangle"
  | "filledDiamond"
  | "glitchedSquare"
  | "hexagon"
  | "beatingCircle"
  | "dashedCircle"
  | "outlinedDiamond"
  | "miniBeatingCircle";

const iconWrapperStyles = tv({
  base: "flex items-center justify-center",
  variants: {
    decoration: {
      circles: "relative p-4",
      glowRectangle: "",
      filledDiamond: "",
      glitchedSquare: "",
      hexagon: "",
      beatingCircle: "",
      dashedCircle: "",
      outlinedDiamond: "",
      miniBeatingCircle: "",
    },
  },
});

export function IconWrapper({
  children,
  decoration,
}: {
  children: React.ReactNode;
  decoration: IconDecoration;
}) {
  return (
    <div className={iconWrapperStyles({ decoration })}>
      {decoration === "circles" && (
        <>
          <span className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
          <span className="absolute inset-2 rounded-full border border-purple-400 opacity-40" />
        </>
      )}
      <div>{children}</div>
    </div>
  );
}
