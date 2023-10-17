import { createI18nClient } from 'next-international/client';
import pt from './pt';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, defineLocale, useCurrentLocale } =
  createI18nClient(
    {
      en: () => import('./en'),
      es: () => import('./es'),
      'pt': () => import('./pt'),
    },
    {
      fallbackLocale: pt,
    },
  );