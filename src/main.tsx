import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/Auth/AuthProvider'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
