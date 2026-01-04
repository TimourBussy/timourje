export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
      bg-white dark:bg-slate-800
      rounded-2xl
      border-2 border-rose-200 dark:border-cyan-900
      ${className || ""}
    `}
    >
      {children}
    </div>
  );
}
