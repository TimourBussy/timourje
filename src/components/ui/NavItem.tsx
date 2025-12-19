import { NavLink, useNavigate } from 'react-router-dom';

export default function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => `transition-colors duration-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive ? "text-white font-semibold" : "text-gray-400"}`}>
        {children}
      </NavLink>
    </li>
  );
}