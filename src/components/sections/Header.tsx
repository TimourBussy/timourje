import Heading from "../ui/Heading";
import NavItem from "../ui/NavItem";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-10
        bg-white
        dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-900
        after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
        after:bg-rose-200
        dark:after:bg-sky-950
      "
    >
      <div className="px-85 py-5 flex items-center">
        <a
          href="/"
          className="rounded-xs transition-transform duration-150 origin-center hover:scale-105"
        >
          <Heading level={2}>Timour Jbanov--Emorine</Heading>
        </a>

        <nav className="ml-auto">
          <ul className="flex space-x-6">
            <NavItem to="/">Accueil</NavItem>
            <NavItem to="/cv">CV</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
        </nav>

        <div
          className="
            flex items-center gap-6 ml-10
            my-1
            border-l
            border-slate-300
            dark:border-gray-700
          "
        ></div>
      </div>
    </header>
  );
}
