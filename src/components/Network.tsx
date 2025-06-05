
interface NetworkProps {
  size?: number;
  className?: string;
}

const Network: React.FC<NetworkProps> = ({ size = 24, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      <path d="M9.17 7.83 6.59 5.24" />
      <path d="M14.83 7.83 17.41 5.24" />
      <path d="M14.83 16.17 17.41 18.76" />
      <path d="M9.17 16.17 6.59 18.76" />
    </svg>
  );
};

export default Network;
