import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DemoFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

const clean = (s: string | undefined, max = 2000) =>
  (s ?? '')
    .replace(/[\x00-\x1F\x7F]/g, '') // supprime caractères de contrôle
    .replace(/<[^>]*>/g, '')         // supprime tags HTML
    .trim()
    .slice(0, max);

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export default function Demo() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormData>();

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      const hp = (document.querySelector('input[name="website"]') as HTMLInputElement)?.value || '';
      if (hp.length > 0) {
        // bot détecté : on “réussit” silencieusement sans rien envoyer
        setIsSuccess(true);
        toast({
          title: t('demo_page.success_title'),
          description: t('demo_page.success_message'),
        });
        return;
      }

      const name = clean(data.name, 100);
      const company = clean(data.company, 150);
      const email = clean(data.email, 150);
      const phone = clean(data.phone, 40);
      const message = clean(data.message, 2000);

      if (!isValidEmail(email)) throw new Error('Email invalide');

      const payload = {
        source: "demo-page",
        lang: navigator.language || "en",
        // French labels requested
        "Nom complet": data.name,
        "Entreprise": data.company,
        "Email professionnelle": data.email,
        "Téléphone": data.phone ?? "",
        "Parlez-nous de votre projet": data.message ?? "",
        // Optional: useful context for your scenario
        meta: {
          path: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        },
        hp,
      };
  
      const res = await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error(`Webhook HTTP ${res.status}`);
      }
  
      setIsSuccess(true);
      toast({
        title: t('demo_page.success_title'),
        description: t('demo_page.success_message'),
      });
    } catch (error) {
      console.error(error);
      toast({
        title: t('lead_capture.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <SEO
          title={t('demo_page.success_title')}
          description={t('demo_page.success_message')}
          path="/demo"
        />
        <div className="min-h-[60vh] flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="mb-4">{t('demo_page.success_title')}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('demo_page.success_message')}
            </p>
            <Button asChild>
              <a href="/">{t('demo_page.back_home')}</a>
            </Button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={t('demo_page.title')}
        description={t('demo_page.subtitle')}
        path="/demo"
      />

      <div className="py-20">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h1 className="mb-4">{t('demo_page.title')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('demo_page.subtitle')}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t('demo_page.title')}</CardTitle>
                <CardDescription>{t('demo_page.trust_note')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('demo_page.name')}</Label>
                    <Input
                      id="name"
                      {...register('name', { required: true })}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t('demo_page.company')}</Label>
                    <Input
                      id="company"
                      {...register('company', { required: true })}
                      className={errors.company ? 'border-destructive' : ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('demo_page.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('demo_page.phone')}</Label>
                    <Input id="phone" type="tel" {...register('phone')} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('demo_page.message')}</Label>
                    <Textarea id="message" rows={4} {...register('message')} />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t('demo_page.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
