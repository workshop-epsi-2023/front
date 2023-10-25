import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/Auth/AuthProvider'
import App from './App'
import SearchProvider from './context/Search/SearchProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)
