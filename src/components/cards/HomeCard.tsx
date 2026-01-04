import { Card } from "../ui/Card";
import { type IconDecoration, IconWrapper } from "../ui/IconWrapper";

export function HomeCard({
  icon,
  iconDecoration,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconDecoration: IconDecoration;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20" />

      <div className="relative">
        <IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
}
