import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { Target, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about_page.value1.title'),
      description: t('about_page.value1.description'),
    },
    {
      icon: Lightbulb,
      title: t('about_page.value2.title'),
      description: t('about_page.value2.description'),
    },
    {
      icon: Heart,
      title: t('about_page.value3.title'),
      description: t('about_page.value3.description'),
    },
  ];

  const timeline = t('about_page.timeline', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  return (
    <>
      <SEO
        title={t('about_page.title')}
        description={t('about_page.subtitle')}
        path="/about"
      />

      <div className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4">{t('about_page.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('about_page.subtitle')}
            </p>
          </motion.div>

          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6">{t('about_page.story_title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about_page.story')}
            </p>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <h2 className="text-3xl font-semibold mb-4">{t('about_page.mission_title')}</h2>
            <p className="text-lg leading-relaxed">
              {t('about_page.mission')}
            </p>
          </motion.section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {t('about_page.values_title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {t('about_page.timeline_title')}
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-4xl font-bold text-primary/20 min-w-[100px]">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Founder */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {t('about_page.founder_title')}
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="h-32 w-32 rounded-full bg-muted flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-1">
                      {t('about_page.founder_name')}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {t('about_page.founder_role')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('about_page.founder_bio')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </>
  );
}
