import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'pb', 'hi']; // Supported locales
const defaultLocale = 'en'; // Default locale

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};