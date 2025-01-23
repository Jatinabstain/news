import { setRequestLocale } from 'next-intl/server';
import ClientPage from './ClientPage';

type Props = {
  params: { locale: string };
};

export default async function IndexPage({ params }: Props) {
  const { locale } = params; // No need for `await`

  // Enable static rendering
  setRequestLocale(locale);

  return <ClientPage locale={locale} />;
}
