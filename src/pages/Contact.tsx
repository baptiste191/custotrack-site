import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const clean = (s: string | undefined, max = 2000) =>
  (s ?? '')
    // supprime caractères de contrôle
    .replace(/[\x00-\x1F\x7F]/g, '')
    // supprime tags HTML
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, max);

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const hp = (document.querySelector('input[name="website"]') as HTMLInputElement)?.value || '';
      if (hp.length > 0) {
        // bot détecté : on fait comme si tout allait bien, mais on n’envoie rien
        setIsSuccess(true);
        toast({ title: t('contact_page.success') });
        reset();
        return;
      }

      const name = clean(data.name, 100);
      const email = clean(data.email, 150);
      const subject = clean(data.subject, 150);
      const message = clean(data.message, 3000);

      if (!isValidEmail(email)) {
        throw new Error('Email invalide');
      }

      const payload = {
        source: "contact-page",
        lang: navigator.language || "en",
        // libellés FR comme pour Demo
        "Nom complet": name,
        "Email professionnelle": email,
        "Sujet": subject ?? "",
        "Message": message,
        meta: {
          path: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        },
        hp,
      };
  
      const res = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error(`Webhook HTTP ${res.status}`);
      }
  
      toast({ title: t('contact_page.success') });
      reset();
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

  return (
    <>
      <SEO
        title={t('contact_page.title')}
        description={t('contact_page.subtitle')}
        path="/contact"
      />

      <div className="py-20">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">{t('contact_page.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('contact_page.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot (champ caché) */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact_page.name')}</Label>
                      <Input
                        id="name"
                        {...register('name', { required: true })}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact_page.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { required: true })}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact_page.subject')}</Label>
                      <Input id="subject" {...register('subject')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact_page.message')}</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        {...register('message', { required: true })}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {t('contact_page.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">{t('contact_page.info_title')}</h3>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium">{t('contact_page.info_email')}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">{t('contact_page.info_phone')}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Address</p>
                      <p className="font-medium text-sm">
                        {t('contact_page.info_address')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
