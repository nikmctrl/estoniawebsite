import { Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'


 
export default function HomePage() {


  
  const t = useTranslations('HomePage');
  const a = useLocale()
  return (
    <div>
      <h1>{a}</h1>
      <Link href="/landing" >{t('title')}</Link>
    </div>
  );
}