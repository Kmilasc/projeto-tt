import type { ReactNode } from 'react';
import { Provider } from '../provider';
import { Language, getItems, getTranslation } from '@/utils/getTranslation';

interface Props { params: { locale: string }; children: ReactNode }

export default async function Layout({ params: { locale },  children }: Props) {
  const { data } = await getItems();
  const itemsWithRightLang = getTranslation(data, locale as Language);

  return <Provider locale={locale} items={itemsWithRightLang}>{children}</Provider>;
}