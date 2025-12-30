export default function HeaderAction({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className="
          p-2 rounded-xl transition-all duration-150
          hover:bg-red-500/10
          dark:hover:bg-cyan-500/10
        "
      >
        {children}
      </button>
    </li>
  );
}
