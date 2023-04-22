import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { GraphqlProvider } from './contexts/GraphqlContext'
import Chat from './services/chat/Chat'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <GraphqlProvider>
          <Provider store={store}>
            <AuthProvider>
              <App />
              <Chat />
            </AuthProvider>
          </Provider>
        </GraphqlProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
