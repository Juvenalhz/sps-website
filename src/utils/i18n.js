const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.services_url': 'servicios',
    'hero.title': 'Bienvenido a SPS',
    'hero.subtitle': 'Creamos soluciones digitales de alto impacto.',
    'hero.cta': 'Descubre más',
    'services.title': 'Nuestros servicios',
    'services.subtitle': 'Soluciones integrales',
    'services.more_info': 'Más información',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.services_url': 'services',
    'hero.title': 'Welcome to SPS',
    'hero.subtitle': 'We build high impact digital solutions.',
    'hero.cta': 'Learn more',
    'services.title': 'OUR SERVICES',
    'services.subtitle': 'COMPREHENSIVE SOLUTIONS',
    'services.more_info': 'More information',
  }
};

export function getTranslation(lang, key) {
  // @ts-ignore
  return translations[lang]?.[key] || key;
}

