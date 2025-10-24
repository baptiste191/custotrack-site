import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('privacy_policy.title')}
        description={t('privacy_policy.preamble')}
        path="/legal/privacy"
      />

      <div className="py-20">
        <div className="container max-w-4xl prose prose-slate dark:prose-invert">
          {/* Titre principal */}
          <h1>{t('privacy_policy.title')}</h1>
          <p className="text-sm text-muted-foreground">
            {t('privacy_policy.last_updated')}
          </p>
          <br /><br />

          {/* Introduction */}
          <p>{t('privacy_policy.preamble')}</p>
          <p>{t('privacy_policy.scope')}</p>
          <br /><br />

          {/* Responsable de traitement */}
          <h3>1. {t('privacy_policy.title_controller')}</h3>
          <p>{t('privacy_policy.controller')}</p>
          <br /><br />

          {/* Consentement et intérêt légitime */}
          <h3>2. {t('privacy_policy.title_consent_and_legitimate_interest')}</h3>
          <p>{t('privacy_policy.consent_and_legitimate_interest')}</p>
          <br /><br />

          {/* Données collectées */}
          <h3>3. {t('privacy_policy.title_data_collected')}</h3>
          <p>{t('privacy_policy.data_collected')}</p>
          <br /><br />

          {/* Méthodes de collecte */}
          <h3>4. {t('privacy_policy.title_collection_methods')}</h3>
          <p>{t('privacy_policy.collection_methods')}</p>
          <br /><br />

          {/* Finalités */}
          <h3>5. {t('privacy_policy.title_purposes')}</h3>
          <p>{t('privacy_policy.purposes')}</p>
          <br /><br />

          {/* Base légale */}
          <h3>6. {t('privacy_policy.title_legal_basis')}</h3>
          <p>{t('privacy_policy.legal_basis')}</p>
          <br /><br />

          {/* Durée de conservation */}
          <h3>7. {t('privacy_policy.title_retention')}</h3>
          <p>{t('privacy_policy.retention')}</p>
          <br /><br />

          {/* Hébergement et sécurité */}
          <h3>8. {t('privacy_policy.title_hosting_and_security')}</h3>
          <p>{t('privacy_policy.hosting_and_security')}</p>
          <br /><br />

          {/* Sous-traitants */}
          <h3>9. {t('privacy_policy.title_processors_and_transfers')}</h3>
          <p>{t('privacy_policy.processors_and_transfers')}</p>
          <br /><br />

          {/* Partage */}
          <h3>10. {t('privacy_policy.title_data_sharing')}</h3>
          <p>{t('privacy_policy.data_sharing')}</p>
          <br /><br />

          {/* Cookies */}
          <h3>11. {t('privacy_policy.title_cookies')}</h3>
          <p>{t('privacy_policy.cookies')}</p>
          <br /><br />

          {/* Droits des utilisateurs */}
          <h3>12. {t('privacy_policy.title_your_rights')}</h3>
          <p>{t('privacy_policy.your_rights')}</p>
          <br /><br />

          {/* Mineurs */}
          <h3>13. {t('privacy_policy.title_minors_and_professional_use')}</h3>
          <p>{t('privacy_policy.minors_and_professional_use')}</p>
          <br /><br />

          {/* Modifications */}
          <h3>14. {t('privacy_policy.title_changes')}</h3>
          <p>{t('privacy_policy.changes')}</p>
          <br /><br />

          {/* Contact */}
          <h3>15. {t('privacy_policy.title_contact')}</h3>
          <p>{t('privacy_policy.contact')}</p>
          <br /><br />

          {/* Clause explicative */}
          <hr />
          <p className="text-sm italic">
            {t('privacy_policy.explanatory_clause')}
          </p>
        </div>
      </div>
    </>
  );
}
