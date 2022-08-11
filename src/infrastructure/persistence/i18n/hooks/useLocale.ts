import i18next from "i18next"
import { Dispatch, useEffect } from "react"
import { useLocalStorage } from "react-use"

import { localeCurrent } from "../config"
import { LocaleKeys } from "../locales"

// `string & {}` is to make property accept both plain and literal string with suggestions in VSCode
// eslint-disable-next-line @typescript-eslint/ban-types
type Locale = LocaleKeys | (string & {})
type SetLocale = Dispatch<LocaleKeys>

function useLocale(): [Locale, SetLocale] {
  const [locale, setLocale] = useLocalStorage<Locale | null>("lang", i18next.language, { raw: true })
  useEffect(() => {
    i18next.changeLanguage(locale || localeCurrent)
  }, [locale])
  return [locale || localeCurrent, setLocale]
}

export default useLocale
