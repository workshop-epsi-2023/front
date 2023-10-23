import { FunctionComponent, useEffect } from 'react'
import { useAuthContext } from '../../context/Auth/AuthProvider'

interface LogoutPageProps {}

const LogoutPage: FunctionComponent<LogoutPageProps> = () => {
  const { disconnect } = useAuthContext()

  useEffect(() => {
    disconnect()
  }, [])

  return null
}

export default LogoutPage
