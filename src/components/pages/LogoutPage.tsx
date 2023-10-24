import { FunctionComponent, useEffect } from 'react'
import { useAuthContext } from '../../context/Auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

interface LogoutPageProps {}

const LogoutPage: FunctionComponent<LogoutPageProps> = () => {
  const { disconnect } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    disconnect()
    navigate('/Login')
  }, [])

  return null
}

export default LogoutPage
