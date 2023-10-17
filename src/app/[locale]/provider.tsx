'use client';

import { useEffect, type ReactNode } from 'react';
import { I18nProviderClient } from '@/locales/client';
import { getTranslation } from '@/utils/getTranslation';
import { create } from 'zustand'

type ProviderProps = {
  locale: string;
  children: ReactNode;
  items: ReturnType<typeof getTranslation>
};

interface IItemsStore {
  items: null | ProviderProps['items'];
}


export const useItemsStore = create<IItemsStore>(() => ({
  items: null,
}))

export function Provider({ locale, items, children }: ProviderProps) {
  useEffect(() => {
    useItemsStore.setState({ items })
  }, [items]);

  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}