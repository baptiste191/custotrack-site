import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { Users, Zap, Link as LinkIcon, BarChart3, Shield, ArrowRight, Check } from 'lucide-react';

type Feature = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bullets: string[];
};

/**
 * Normalise une valeur i18n en tableau de string.
 * - Si c’est déjà un tableau → ok
 * - Si c’est une string → on découpe par sauts de ligne (ou on met dans un tableau)
 * - Sinon → []
 */
const tArray = (t: (k: string, o?: any) => any, key: string): string[] => {
  const v = t(key, { returnObjects: true }) as unknown;
  if (Array.isArray(v)) return v as string[];
  if (typeof v === 'string') {
    const trimmed = v.trim();
    if (!trimmed) return [];
    // autorise un bullet par ligne si on a mis un simple texte
    return trimmed.split('\n').map(s => s.trim()).filter(Boolean);
  }
  return [];
};

export default function Features() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      id: 'crm',
      icon: Users,
      title: t('features.crm.title'),
      description: t('features.crm.description'),
      bullets: tArray(t, 'features.crm.bullets'),
    },
    {
      id: 'automation',
      icon: Zap,
      title: t('features.automation.title'),
      description: t('features.automation.description'),
      bullets: tArray(t, 'features.automation.bullets'),
    },
    {
      id: 'ai_agent',
      icon: LinkIcon,
      title: t('features.ai_agent.title'),
      description: t('features.ai_agent.description'),
      bullets: tArray(t, 'features.ai_agent.bullets'),
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
      bullets: tArray(t, 'features.reporting.bullets'),
    },
    {
      id: 'security',
      icon: Shield,
      // si tu as des clés i18n pour security, remplace ces deux lignes par t(...)
      title: t('features.security.title', 'Security'),
      description: t('features.security.description', 'Enterprise-grade security and compliance'),
      bullets: tArray(t, 'features.security.bullets').length
        ? tArray(t, 'features.security.bullets')
        : [
            'Data encryption at rest and in transit',
            'GDPR compliance',
            'Role-based access control',
          ],
    },
  ];

  const defaultTab = features[0]?.id ?? 'crm';

  return (
    <>
      <SEO
        title={t('features_page.title')}
        description={t('features_page.subtitle')}
        path="/features"
      />

      <div className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">{t('features_page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features_page.subtitle')}
            </p>
          </motion.div>

          <Tabs defaultValue={defaultTab} className="max-w-6xl mx-auto">
            {/* Tabs scrollables en mobile */}
            <div className="overflow-x-auto pb-2 mb-6 -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:grid-cols-5">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="gap-2 flex-shrink-0 px-4 items-center"
                  >
                    {/* wrapper anti-squeeze pour l'icône */}
                    <span className="inline-flex h-4 w-4 items-center justify-center shrink-0">
                      {/* on protège aussi si jamais l’icône est undefined */}
                      {feature.icon ? (
                        <feature.icon className="h-4 w-4" aria-hidden />
                      ) : (
                        <span className="h-4 w-4" />
                      )}
                    </span>
                    <span className="whitespace-nowrap">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl">{feature.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold mb-4">
                            {t('features_page.key_features', 'Key Features')}
                          </h3>
                          <ul className="space-y-3">
                            {(feature.bullets ?? []).map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-muted rounded-xl p-8 flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <feature.icon className="h-24 w-24 mx-auto mb-4 opacity-20" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/demo">
                {t('features_page.cta')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
