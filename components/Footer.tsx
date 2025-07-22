
import React from 'react';
import { Sparkles, Heart, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Use the hook

  const socialLinks = [{ icon: Heart }, { icon: Users }, { icon: Zap }];
  
  // Define service links with translation keys
  const serviceLinks = [
    { key: 'footer.services.personalized', href: '#' },
    { key: 'footer.services.consulting', href: '#' },
    { key: 'footer.services.workshops', href: '#' },
    { key: 'footer.services.corporate', href: '#' },
  ];
  
  // Define contact info with translation keys
  const contactInfo = [
    { key: 'footer.contact.email', text: 'hello@fraganz.ai' }, // Email and phone might be hardcoded text depending on requirements
    { key: 'footer.contact.phone', text: '+1 (555) 123-4567' },
    { key: 'footer.contact.barcelona', text: 'Barcelona, Spain' },
    { key: 'footer.contact.paris', text: 'Paris, France' },
  ];

  return (
    <footer className="p-4">
      <div className="max-w-6xl mx-auto bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="h-5 w-5 text-white dark:text-slate-900" />
              </div>
              <span className="text-2xl font-sansation text-slate-900 dark:text-slate-100">fraganz.ai</span>{/* Logo text might not be translated */}
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed font-sansation">
              {t('footer.description')}{/* Use translated description */}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((Link, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-slate-100/50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-white/70 dark:hover:bg-slate-700/70 transition-colors">
                  <Link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-sansation text-slate-900 dark:text-slate-100 mb-6">{t('footer.services_title')}</h3>{/* Use translated services title */}
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 font-sansation hover:text-slate-900 dark:hover:text-slate-100 transition-colors">{t(link.key)}</a>{/* Use translated service link text */}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-sansation text-slate-900 dark:text-slate-100 mb-6">{t('footer.contact_title')}</h3>{/* Use translated contact title */}
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-sansation">
              {contactInfo.map(info => <li key={info.key}>{t(info.key)}</li>)}{/* Use translated contact info */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/50 dark:border-slate-700/50 mt-12 pt-8 text-center text-slate-600 dark:text-slate-400 font-sansation text-sm">
          <p>&copy; {new Date().getFullYear()} fraganz.ai. {t('footer.copyright')}</p>{/* Use translated copyright text */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;