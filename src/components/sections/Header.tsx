import Title from "../ui/Title";
import NavItem from "../ui/NavItem";

export default function Header() {
    return (
        <header className="w-full px-85 py-5 flex sticky top-0 z-10 border-b border-[#0f384f] bg-gradient-to-r from-[#111828] to-[#13182c]">
            <Title size="small">Timour Jbanov--Emorine</Title>
            <div>
                <nav>
                    <ul className="flex space-x-4 ml-auto">
                        <NavItem to="/">Accueil</NavItem>
                        <NavItem to="/cv">CV</NavItem>
                        <NavItem to="/portfolio">Portfolio</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </ul>
                </nav>
            </div>
        </header>
    );
}