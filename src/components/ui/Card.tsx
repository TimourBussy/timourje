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
      group flex w-full rounded-2xl border-2 transition-all
      bg-white border-red-500/20 hover:border-red-500
      dark:bg-slate-800 dark:border-cyan-500/20 dark:hover:border-cyan-400
      ${className || ""}
    `}
    >
      {children}
    </div>
  );
}
