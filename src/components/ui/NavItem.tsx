import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-4 py-2.5 rounded-xl transition-all duration-150
          ${
            isActive
              ? "text-white bg-red-500 dark:bg-cyan-500"
              : "hover:bg-red-500/10 dark:hover:bg-cyan-500/10"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
