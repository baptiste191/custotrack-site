import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';
import { Users, Zap, Link as LinkIcon, BarChart3, Shield, ArrowRight, Check } from 'lucide-react';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'crm',
      icon: Users,
      title: t('features.crm.title'),
      description: t('features.crm.description'),
      bullets: t('features.crm.bullets', { returnObjects: true }) as string[],
    },
    {
      id: 'automation',
      icon: Zap,
      title: t('features.automation.title'),
      description: t('features.automation.description'),
      bullets: t('features.automation.bullets', { returnObjects: true }) as string[],
    },
    {
      id: 'ai_agent',
      icon: LinkIcon,
      title: t('features.ai_agent.title'),
      description: t('features.ai_agent.description'),
      bullets: t('features.ai_agent.bullets', { returnObjects: true }) as string[],
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
      bullets: t('features.reporting.bullets', { returnObjects: true }) as string[],
    },
    {
      id: 'security',
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
      bullets: t('features.security.bullets', { returnObjects: true }) as string[],
    },
  ];

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

          <Tabs defaultValue="crm" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="gap-2">
                  <feature.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature, index) => (
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
                          <h3 className="font-semibold mb-4">Key Features</h3>
                          <ul className="space-y-3">
                            {feature.bullets.map((bullet, i) => (
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
