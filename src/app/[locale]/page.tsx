import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('LocaleLayout');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t('title')}
      </p>
    </PageLayout>
  );
}
