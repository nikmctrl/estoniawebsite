'use client'

import { redirect } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { hasLocale } from "next-intl"
import { useEffect, useState } from "react"


export default function LocaleSwitchera() {
    const [locale, setLocale] = useState(() => navigator.language.split('-')[0])
  useEffect(() => {setLocale(navigator.language.split('-')[0])})

  const isReal = hasLocale(routing.locales, locale);
    
  redirect({href: '/', locale: isReal ? locale : routing.defaultLocale, forcePrefix: true});
    
    return <div></div>

}
