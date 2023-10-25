import { ComponentType } from 'react'
import { useAuthContext } from '../context/Auth/AuthProvider'
import { Navigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const WithAuthentication = (Component: ComponentType<any>) => {
  return () => {
    const { isConnected } = useAuthContext()
    if (!isConnected) {
      return <Navigate to="/login" />
    }
    return (
      <Layout>
        <Component />
      </Layout>
    )
  }
}

export default WithAuthentication
