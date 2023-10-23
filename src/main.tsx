import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout/Layout'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
