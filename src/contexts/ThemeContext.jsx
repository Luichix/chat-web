import React, { createContext, useState } from 'react'
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../services/helpers/localStorage'

const initialTheme = loadFromLocalStorage('themeGodigit') || 'light'
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === 'dark') {
      saveToLocalStorage('themeGodigit', 'light')
      setTheme('light')
    } else {
      saveToLocalStorage('themeGodigit', 'dark')
      setTheme('dark')
    }
  }

  const data = {
    handleTheme,
    theme,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext
