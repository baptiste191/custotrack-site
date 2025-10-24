import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('legal.terms_title')}
        description="Terms of Use"
        path="/legal/terms"
      />

      <div className="py-20">
        <div className="container max-w-4xl prose prose-slate dark:prose-invert">
          <h1>{t('legal.terms_title')}</h1>
          <p className="lead">{t('legal.last_updated')}</p>

          <h2>[[REPLACE: 1. Objet]]</h2>
          <p>
            [[REPLACE: Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme CustoTrack.]]
          </p>

          <h2>[[REPLACE: 2. Acceptation des CGU]]</h2>
          <p>
            [[REPLACE: L'utilisation de CustoTrack implique l'acceptation pleine et entière des présentes CGU.]]
          </p>

          <h2>[[REPLACE: 3. Description du service]]</h2>
          <p>
            [[REPLACE: CustoTrack est une plateforme CRM SaaS qui permet de gérer vos contacts clients, automatiser vos workflows commerciaux, et intégrer vos outils métier.]]
          </p>

          <h2>[[REPLACE: 4. Inscription et compte]]</h2>
          <p>[[REPLACE: Pour utiliser CustoTrack, vous devez :]]</p>
          <ul>
            <li>[[REPLACE: Créer un compte avec des informations exactes]]</li>
            <li>[[REPLACE: Maintenir la sécurité de vos identifiants]]</li>
            <li>[[REPLACE: Nous informer de tout accès non autorisé]]</li>
          </ul>

          <h2>[[REPLACE: 5. Abonnements et paiement]]</h2>
          <p>
            [[REPLACE: Les tarifs de CustoTrack sont disponibles sur demande. Les paiements sont prélevés selon la fréquence choisie (mensuelle ou annuelle).]]
          </p>

          <h2>[[REPLACE: 6. Utilisation acceptable]]</h2>
          <p>[[REPLACE: Vous vous engagez à ne pas :]]</p>
          <ul>
            <li>[[REPLACE: Utiliser le service à des fins illégales]]</li>
            <li>[[REPLACE: Tenter d'accéder aux systèmes de manière non autorisée]]</li>
            <li>[[REPLACE: Interférer avec le fonctionnement du service]]</li>
            <li>[[REPLACE: Copier ou reproduire le service]]</li>
          </ul>

          <h2>[[REPLACE: 7. Propriété intellectuelle]]</h2>
          <p>
            [[REPLACE: Tous les éléments de CustoTrack (logiciel, design, contenu) sont protégés par le droit d'auteur et restent notre propriété exclusive.]]
          </p>

          <h2>[[REPLACE: 8. Données et confidentialité]]</h2>
          <p>
            [[REPLACE: Vos données sont traitées conformément à notre Politique de Confidentialité. Vous conservez la propriété de vos données client.]]
          </p>

          <h2>[[REPLACE: 9. Disponibilité du service]]</h2>
          <p>
            [[REPLACE: Nous nous efforçons d'assurer une disponibilité maximale du service. Toutefois, nous ne garantissons pas une disponibilité de 100%.]]
          </p>

          <h2>[[REPLACE: 10. Limitation de responsabilité]]</h2>
          <p>
            [[REPLACE: Dans les limites autorisées par la loi, notre responsabilité est limitée au montant des sommes versées au cours des 12 derniers mois.]]
          </p>

          <h2>[[REPLACE: 11. Résiliation]]</h2>
          <p>
            [[REPLACE: Vous pouvez résilier votre abonnement à tout moment. Nous pouvons suspendre ou résilier votre compte en cas de violation des CGU.]]
          </p>

          <h2>[[REPLACE: 12. Modifications]]</h2>
          <p>
            [[REPLACE: Nous nous réservons le droit de modifier ces CGU. Les modifications prennent effet après notification.]]
          </p>

          <h2>[[REPLACE: 13. Loi applicable]]</h2>
          <p>
            [[REPLACE: Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de [Ville].]]
          </p>

          <h2>[[REPLACE: 14. Contact]]</h2>
          <p>
            [[REPLACE: Pour toute question concernant ces CGU :]]
          </p>
          <ul>
            <li>[[REPLACE: Email : legal@custotrack.com]]</li>
            <li>[[REPLACE: Adresse : [Adresse complète]]]</li>
          </ul>
        </div>
      </div>
    </>
  );
}
