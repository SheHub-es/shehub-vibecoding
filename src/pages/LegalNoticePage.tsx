import { useEffect } from 'react';
import LegalNotice from '@/components/LegalNotice';

const LegalNoticePage: React.FC = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return <LegalNotice />;
};

export default LegalNoticePage;
