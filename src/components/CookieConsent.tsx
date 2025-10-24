import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (analytics: boolean) => {
    localStorage.setItem('cookie-consent', analytics ? 'analytics' : 'essential');
    setShow(false);

    if (analytics && import.meta.env.VITE_PLAUSIBLE_DOMAIN) {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://plausible.io/js/script.js';
      script.setAttribute('data-domain', import.meta.env.VITE_PLAUSIBLE_DOMAIN);
      document.head.appendChild(script);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 shadow-lg">
        <p className="text-sm mb-4">{t('cookie_consent.message')}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleConsent(false)}
          >
            {t('cookie_consent.essential')}
          </Button>
          <Button size="sm" onClick={() => handleConsent(true)}>
            {t('cookie_consent.accept')}
          </Button>
        </div>
      </Card>
    </div>
  );
};
