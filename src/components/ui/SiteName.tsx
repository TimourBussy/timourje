type SiteNameProps = {
  variant: 'header' | 'hero';
}

export function SiteName({ variant }: SiteNameProps) {
    const styles = {
        header: "text-2xl font-bold",
        hero: "text-5xl md:text-6xl"
    };

    return (
        <h1 className={`bg-gradient-to-r from-[#00d3f3] to-[#ac47ff] bg-clip-text text-transparent ${styles[variant]}
        `}>
            Timour Jbanov--Emorine
        </h1>
    );
}