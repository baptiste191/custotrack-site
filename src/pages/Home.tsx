import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from '@/components/SEO';
import { Zap, Shield, BarChart3, Users, ArrowRight, Play, Check } from 'lucide-react';

const MotionCard = motion(Card);

export default function Home() {
  const { t } = useTranslation();

  const valueProps = [
    {
      icon: Zap,
      title: t('value_props.automation.title'),
      description: t('value_props.automation.description'),
    },
    {
      icon: Users,
      title: t('value_props.simplicity.title'),
      description: t('value_props.simplicity.description'),
    },
    {
      icon: BarChart3,
      title: t('value_props.insights.title'),
      description: t('value_props.insights.description'),
    },
    {
      icon: Shield,
      title: t('value_props.security.title'),
      description: t('value_props.security.description'),
    },
  ];

  const steps = [
    {
      number: '01',
      title: t('how_it_works.step1.title'),
      description: t('how_it_works.step1.description'),
    },
    {
      number: '02',
      title: t('how_it_works.step2.title'),
      description: t('how_it_works.step2.description'),
    },
    {
      number: '03',
      title: t('how_it_works.step3.title'),
      description: t('how_it_works.step3.description'),
    },
  ];

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.q${i + 1}.question`),
    answer: t(`faq.q${i + 1}.answer`),
  }));

  return (
    <>
      <SEO
        title={t('hero.title')}
        description={t('hero.subtitle')}
        path="/"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              {t('hero.eyebrow')}
            </Badge>
            <h1 className="mb-6 text-balance">{t('hero.title')}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/demo">
                  {t('hero.cta_primary')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4" />
                {t('hero.cta_secondary')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('value_props.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{prop.description}</CardDescription>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {['crm', 'automation', 'ai_agent', 'reporting'].map((key, index) => (
              <MotionCard
                key={key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                  <CardTitle>{t(`features.${key}.title`)}</CardTitle>
                  <CardDescription>{t(`features.${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(t(`features.${key}.bullets`, { returnObjects: true }) as string[]).map(
                      (bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </MotionCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/features">
                {t('nav.features')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('how_it_works.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('faq.title')}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-primary-foreground">{t('cta_final.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('cta_final.subtitle')}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/demo">
                {t('cta_final.button')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
