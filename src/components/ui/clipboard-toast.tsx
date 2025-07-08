import { useLanguage } from '@/contexts/LanguageContext';

interface ClipboardToastProps {
  show: boolean;
}

const ClipboardToast: React.FC<ClipboardToastProps> = ({ show }) => {
  const { language } = useLanguage();

  if (!show) return null;

  const message =
    language === 'ca'
      ? 'Adreça electrònica copiada al porta-retalls.'
      : language === 'en'
      ? 'Email address copied to clipboard.'
      : 'Dirección de correo copiada al portapapeles.';

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-background text-foreground border border-shehub-purple/60 rounded-xl px-6 py-4 shadow-[0_0_0_4px_rgba(180,136,255,0.1)] max-w-xs text-center">
        <p className="text-base font-medium">{message}</p>
      </div>
    </div>
  );
};

export default ClipboardToast;
