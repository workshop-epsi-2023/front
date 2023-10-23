import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'
import { useUndefinedContext } from '../../utils/function'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValue {
  isConnected: boolean
  connect: (credentials: ICredentials) => void
  disconnect: () => void
}

interface ICredentials {
  email: string
  password: string
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuthContext = () =>
  useUndefinedContext<AuthContextValue>(AuthContext)

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)

  const connect = ({ email, password }: ICredentials) => {
    if (email == 'admin' && password == 'admin') {
      setIsConnected(true)
    }
  }

  const disconnect = () => {
    setIsConnected(false)
  }

  return (
    <AuthContext.Provider value={{ isConnected, connect, disconnect }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
