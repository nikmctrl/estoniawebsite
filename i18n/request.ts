import { hasLocale } from 'next-intl'
import { getRequestConfig, setRequestLocale } from 'next-intl/server'
import { routing } from './routing'
 
export default getRequestConfig(async ({ requestLocale }) => {
  const locale: string = (hasLocale(routing.locales, await requestLocale)
    ? await requestLocale
    : routing.defaultLocale)!;


  setRequestLocale(locale)
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

