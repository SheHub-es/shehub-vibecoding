import { useEffect } from 'react';
import CookiesPolicy from '@/components/CookiesPolicy'; 

const CookiesPolicyPage: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CookiesPolicy />;
};

export default CookiesPolicyPage;
