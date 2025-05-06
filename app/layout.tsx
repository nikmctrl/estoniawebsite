import { routing } from '@/i18n/routing'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getLocale, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
 
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  // params: Promise<{locale: string}>
}) {

  

  const locale = await getLocale()
  if (!hasLocale(routing.locales, locale)) {
     notFound();
   }
 
  // Enable static rendering
  setRequestLocale(locale);
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}