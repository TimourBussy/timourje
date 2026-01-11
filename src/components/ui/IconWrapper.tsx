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
  base: "relative flex items-center justify-center w-16 h-16 text-red-500 dark:text-cyan-400 transition-all",
  variants: {
    decoration: {
      circles: "",
      glowRectangle: "border-2 border-red-500 dark:border-cyan-400",
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
  className,
  children,
  decoration,
}: {
  className?: string;
  children: React.ReactNode;
  decoration: IconDecoration;
}) {
  return (
    <div className={iconWrapperStyles({ decoration, className })}>
      {decoration === "circles" && (
        <>
          <span
            className="
              absolute inset-0 rounded-full border-2 animate-pulse
              border-red-500 
              dark:border-cyan-400
            "
          />
          <span
            className="
              absolute inset-2 rounded-full border-2 opacity-50
              border-red-500
              dark:border-cyan-400"
          />
          <div
            className="
              rounded-full p-0.5
              bg-red-500/10
              dark:bg-cyan-400/10"
          >
            <div className="transition-all">{children}</div>
          </div>
        </>
      )}

      {decoration === "glowRectangle" && children}
    </div>
  );
}
