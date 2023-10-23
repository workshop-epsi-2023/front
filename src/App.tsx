import { FunctionComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import { useAuthContext } from './context/Auth/AuthProvider'
import LogoutPage from './components/pages/LogoutPage'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const { isConnected } = useAuthContext()

  return (
    <>
      {!isConnected && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      {isConnected && (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      )}
    </>
  )
}

export default App
