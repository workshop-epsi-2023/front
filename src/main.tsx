import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AuthProvider from './context/Auth/AuthProvider'
import App from './App'
import SearchProvider from './context/Search/SearchProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <App />
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)
