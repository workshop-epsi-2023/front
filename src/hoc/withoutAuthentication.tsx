import { ComponentType } from 'react'
import { useAuthContext } from '../context/Auth/AuthProvider'
import { Navigate } from 'react-router-dom'

const WithoutAuthentication = (Component: ComponentType) => {
  return () => {
    const { isConnected } = useAuthContext()
    if (isConnected) {
      return <Navigate to="/" />
    }
    return <Component />
  }
}

export default WithoutAuthentication
