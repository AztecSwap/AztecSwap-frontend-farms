import { useContext } from 'react'
import { TranslationsContext } from '../contexts/Localisation/translationsContext'
import { getTranslation } from '../utils/translateTextHelpers'

interface ContextData {
  [key: string]: number | string
}

const useI18n = () => {
  const { translations } = useContext(TranslationsContext)

  return (translationId: number, fallback: string, data: ContextData = {}) => {
    if (translations[0] === 'error') {
      return fallback
    }
    if (translations.length > 0) {
      return getTranslation(translations, translationId, fallback)
    }
    return fallback
  }
}

export default useI18n
