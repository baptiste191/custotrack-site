import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
            <img
              src="/Logo_CustoTrack.png"
              alt="Logo CustoTrack"
              className="h-8 w-8 rounded-lg object-contain"
            />
              <span className="text-xl font-bold">CustoTrack</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-primary transition-colors">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-primary transition-colors">
                  {t('nav.demo')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/legal/privacy" className="hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              {/*<li>
                <Link to="/legal/terms" className="hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>*/}
              <li>
                <Link to="/legal/imprint" className="hover:text-primary transition-colors">
                  {t('footer.imprint')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
