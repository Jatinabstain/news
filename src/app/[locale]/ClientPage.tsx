'use client';

import {useTranslations} from 'next-intl';
import PageLayout from '@/components/PageLayout';

type Props = {
  locale: string;
};

export default function ClientPage({}: Props) {
  const t = useTranslations('LocaleLayout');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t('title')}
      </p>
    </PageLayout>
  );
}