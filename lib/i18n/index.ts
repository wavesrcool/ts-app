import memoize from 'lodash.memoize'
import i18n from 'i18n-js'
import * as Localization from 'expo-localization'

import fr from '../../locales/fr.json'
import en from '../../locales/en.json'

i18n.defaultLocale = 'en'
i18n.fallbacks = true
i18n.translations = { fr, en }
i18n.locale = Localization.locale

export const ts = memoize(
  (key, config?) => i18n.t(key, config),
  (key, config?) => (config ? key + JSON.stringify(config) : key)
)
export const locale = i18n.locale
