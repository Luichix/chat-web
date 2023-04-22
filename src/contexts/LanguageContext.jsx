import React, { createContext, useState } from 'react'
const LanguageContext = createContext()
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../services/helpers/localStorage'

const initialLanguage = loadFromLocalStorage('languageGo-digit') || 'en'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)

  const handleLanguage = (event) => {
    if (event.target.value === 'en') {
      saveToLocalStorage('languageGo-digit', 'en')
      setLanguage('en')
    } else if (event.target.value === 'es') {
      saveToLocalStorage('languageGo-digit', 'es')
      setLanguage('es')
    }
  }

  const data = {
    handleLanguage,
    language,
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export default LanguageContext
