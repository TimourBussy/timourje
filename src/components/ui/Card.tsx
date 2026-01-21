import { Heading } from "./Heading";
import { IconWrapper, type IconDecoration } from "./IconWrapper";
import { Paragraph } from "./Paragraph";
import { tv } from "tailwind-variants";

function BaseCard({
  size = "big",
  className,
  children,
}: {
  size?: "big" | "small";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`
				${
          size === "small"
            ? "p-3 md:p-5 md:items-start md:justify-start"
            : "p-6 md:p-8 w-full max-w-full"
        }
				group flex flex-col min-w-0 rounded-2xl border-2 transition-all
				text-gray-700 bg-white border-red-500/20 hover:border-red-500
				dark:text-gray-300 dark:bg-slate-800 dark:border-cyan-500/20 dark:hover:border-cyan-500
				${className || ""}
			`}
    >
      {children}
    </section>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <Heading level={3}>{children}</Heading>
);
const Body = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
const Icon = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

function Card(
  props:
    | ({ variant: "description" } & CardDescriptionProps)
    | ({ variant: "list" } & CardListProps)
    | ({ variant: "timeline" } & CardTimelineProps)
    | ({ variant: "home" } & CardHomeProps)
    | { children: React.ReactNode; className?: string; size?: "big" | "small" },
) {
  const { variant, ...rest } = props as any;
  switch (variant) {
    case "description":
      return <Card.Description {...(rest as CardDescriptionProps)} />;
    case "list":
      return <Card.List {...(rest as CardListProps)} />;
    case "timeline":
      return <Card.Timeline {...(rest as CardTimelineProps)} />;
    case "home":
      return <Card.Home {...(rest as CardHomeProps)} />;
    default:
      const { children, className, size } = props as {
        children: React.ReactNode;
        className?: string;
        size?: "big" | "small";
      };
      return (
        <BaseCard className={className} size={size}>
          {children}
        </BaseCard>
      );
  }
}

function Description({
  icon,
  iconDecoration,
  title,
  description,
  size = "big",
}: CardDescriptionProps) {
  const isSmall = size === "small";
  return (
    <BaseCard size={size}>
      <div
        className={
          isSmall
            ? "flex flex-col items-center justify-center text-center md:text-left md:flex-row"
            : "w-full"
        }
      >
        {icon && iconDecoration && (
          <div
            className={`flex ${isSmall ? "justify-center md:items-center" : "items-center"}`}
          >
            <IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
            {!isSmall && <Heading level={3}>{title}</Heading>}
          </div>
        )}
        <div
          className={isSmall ? "flex flex-col items-center w-full" : undefined}
        >
          {isSmall && (
            <Heading level={5} className="text-center md:text-left w-full">
              {title}
            </Heading>
          )}
          {Array.isArray(description) ? (
            description.map((desc, i) => (
              <Paragraph key={i} className={i > 0 ? "mt-4" : ""}>
                {desc}
              </Paragraph>
            ))
          ) : (
            <Paragraph>{description}</Paragraph>
          )}
        </div>
      </div>
    </BaseCard>
  );
}

const listGridStyles = tv({
  base: "grid gap-4 mt-6",
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "md:grid-cols-2 lg:grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "md:grid-cols-2 xl:grid-cols-4",
    },
  },
  defaultVariants: {
    cols: 3,
  },
});
function List({
  icon,
  iconDecoration,
  title,
  listItems,
  cols = 3,
  size = "big",
}: CardListProps) {
  const isSmall = size === "small";
  return (
    <BaseCard size={size}>
      <Body>
        <div className="relative">
          <div
            className={`flex flex-row items-center ${!isSmall ? "mb-2" : ""}`}
          >
            {icon && iconDecoration && (
              <Icon>
                <IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
              </Icon>
            )}
            <Title>
              <Heading level={3}>{title}</Heading>
            </Title>
          </div>
          <div className="flex flex-row">
            {!icon && !iconDecoration && (
              <div className="w-4" aria-hidden="true" />
            )}
            <ul
              className={
                isSmall
                  ? "flex items-center gap-4 mt-4 w-full justify-center md:justify-start flex-wrap"
                  : `${listGridStyles({ cols })} w-full`
              }
            >
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className={`
										${!isSmall ? "p-3" : ""}
										text-center rounded-lg border cursor-default bg-gradient-to-br transition-all hover:scale-105
										text-slate-800 border-red-200 from-red-50 to-pink-50
										dark:text-inherit dark:border-cyan-700/30 dark:from-cyan-900/20 dark:to-purple-900/20
									`}
                >
                  {Array.isArray(item) ? (
                    <div className="flex flex-col gap-2">
                      {item.map((sub, i) => (
                        <span
                          key={i}
                          className={i === 0 ? "text-2xl" : "text-sm"}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Body>
    </BaseCard>
  );
}

function Timeline({ icon, iconDecoration, title, entries }: CardTimelineProps) {
  return (
    <BaseCard>
      <Body>
        <div className="relative">
          <div className="flex items-center mb-2">
            {icon && iconDecoration && (
              <Icon>
                <IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
              </Icon>
            )}
            <Title>
              <Heading level={3}>{title}</Heading>
            </Title>
          </div>
          <div className="space-y-6 mt-5 ml-1.5">
            {[...entries].reverse().map((entry, index) => (
              <article
                key={index}
                className="
									px-2 sm:px-6 py-2 border-l-4
									border-red-500 text-gray-600
									dark:border-cyan-500 dark:text-gray-300"
              >
                <div className="space-y-1">
                  <Heading level={4}>{entry.title}</Heading>
                  <Paragraph size="small">
                    {entry.organization} — {entry.period}
                  </Paragraph>
                  <Paragraph size="small">{entry.description}</Paragraph>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Body>
    </BaseCard>
  );
}

function Home({ icon, iconDecoration, title, description }: CardHomeProps) {
  return (
    <BaseCard
      className="
				lg:w-md relative h-full hover:shadow-2xl hover:-translate-y-2
				shadow-red-500/20
				dark:shadow-cyan-500/20"
    >
      <div
        className="
					absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br
					from-red-500/10 to-red-500/0
					dark:from-cyan-500/10 dark:to-cyan-500/0"
      />
      <Body>
        <div className="relative flex flex-col items-start w-auto">
          {icon && iconDecoration && (
            <Icon>
              <IconWrapper decoration={iconDecoration}>{icon}</IconWrapper>
            </Icon>
          )}
          <Title>
            <Heading level={2} className="text-3xl mt-4 mb-2 text-left">
              {title}
            </Heading>
          </Title>
          <Paragraph size="small">{description}</Paragraph>
        </div>
      </Body>
    </BaseCard>
  );
}

// Types
export type CardDescriptionProps = {
  icon?: React.ReactNode;
  iconDecoration?: IconDecoration;
  title: string;
  description: string | string[];
  size?: "big" | "small";
};
export type CardListProps = {
  icon?: React.ReactNode;
  iconDecoration?: IconDecoration;
  title: string;
  listItems: (string | React.ReactNode)[] | (string | React.ReactNode)[][];
  cols?: 1 | 2 | 3 | 4;
  size?: "big" | "small";
};
export type CardTimelineProps = {
  icon?: React.ReactNode;
  iconDecoration?: IconDecoration;
  title: string;
  entries: Array<{
    title: string;
    organization: string;
    period: string;
    description: React.ReactNode;
  }>;
};
export type CardHomeProps = {
  icon?: React.ReactNode;
  iconDecoration?: IconDecoration;
  title: string;
  description: string;
};

Card.Description = Description;
Card.List = List;
Card.Timeline = Timeline;
Card.Home = Home;

export default Card;
