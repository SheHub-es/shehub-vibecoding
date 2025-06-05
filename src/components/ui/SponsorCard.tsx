
interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className="group transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100"
    >
      <div className="bg-white rounded-lg p-6 border border-shehub-purple/30 shadow-sm group-hover:shadow-md transition-all max-w-[200px] mx-auto">
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className="h-8 md:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 mx-auto"
        />
      </div>
    </a>
  );
};

export default SponsorCard;
