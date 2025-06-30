
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
      className="group transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
    >
      <div className="bg-violet-300 rounded-lg p-6 border border-shehub-purple/30 shadow-sm group-hover:shadow-md transition-all w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex items-center justify-center">
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
        />
      </div>
    </a>
  );
};

export default SponsorCard;
