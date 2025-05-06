import { Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'


 
export default function HomePage({params}: {params: Promise<{locale: string}>}) {



  const t = useTranslations('HomePage');
  const a = useLocale()
  return (
    <div>
      <h1>{a} 1</h1>
      <Link href="/">{t('title')}</Link>
    </div>
  );
}