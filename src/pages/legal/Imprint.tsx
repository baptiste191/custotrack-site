import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';

export default function Imprint() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('legal_notice.title')}
        description={t('legal_notice.editor.content')}
        path="/legal/imprint"
      />

      <div className="py-20">
        <div className="container max-w-4xl prose prose-slate dark:prose-invert">
          {/* Titre + date */}
          <h1>{t('legal_notice.title')}</h1>
          <p className="text-sm text-muted-foreground">
            {t('legal_notice.last_updated')}
          </p>
          <br /><br />

          {/* 1. Éditeur du site */}
          <b> {t('legal_notice.editor.title')}</b>
          <p dangerouslySetInnerHTML={{__html:t('legal_notice.editor.content'),}} />
          <br /><br />

          {/* 2. Hébergeur */}
          <b> {t('legal_notice.hosting.title')}</b>
          <p>{t('legal_notice.hosting.content')}</p>
          <br /><br />

          {/* 3. Conditions d'utilisation / Propriété intellectuelle */}
          <b> {t('legal_notice.terms_of_use.title')}</b>
          <p>{t('legal_notice.terms_of_use.content')}</p>
          <br /><br />

          {/* 4. Données personnelles */}
          <b> {t('legal_notice.personal_data.title')}</b>
          <p>{t('legal_notice.personal_data.content')}</p>
          <br /><br />

          {/* 5. Contact */}
          <b> {t('legal_notice.contact.title')}</b>
          <p>{t('legal_notice.contact.content')}</p>
        </div>
      </div>
    </>
  );
}
