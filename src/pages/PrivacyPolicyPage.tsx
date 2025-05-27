import { useEffect } from 'react';
import PrivacyPolicy from '@/components/PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
