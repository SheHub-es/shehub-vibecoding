interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  const isWideLogo = sponsor.name === "Barcelona Activa";

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className="group transition-all duration-300 hover:scale-105 opacity-95 hover:opacity-100"
    >
      <div
        className="w-[140px] h-[80px] sm:w-[150px] sm:h-[85px] md:w-[180px] md:h-[95px] bg-violet-300 rounded-xl p-4 border border-shehub-purple/30 shadow-sm 
        group-hover:shadow-md transition-all flex items-center justify-center
        "
      >
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className={`object-contain w-auto max-h-10 sm:max-h-12 md:max-h-14 transition-transform duration-300
      group-hover:scale-105
            ${
              isWideLogo
                ? "max-h-8 sm:max-h-10 md:max-h-12"
                : "max-h-10 sm:max-h-12 md:max-h-14"
            }
          `}
        />
      </div>
    </a>
  );
};

export default SponsorCard;
