import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/env'
import { useUndefinedContext } from '../../utils/function'

interface AuthProviderProps {
  children: ReactNode
}

export interface IUser {
  id: number
  pseudo: string
  email: string
  password: string
  level: number
  commentCount: number
}

interface AuthContextValue {
  isConnected: boolean
  user: IUser | null
  connect: (credentials: ICredentials) => void
  disconnect: () => void
}

interface ICredentials {
  username: string
  password: string
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuthContext = () => useUndefinedContext<AuthContextValue>(AuthContext)

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(JSON.parse(localStorage.getItem('user') ?? 'null'))
  const isConnected = user != null

  const connect = ({ username, password }: ICredentials) => {
    fetch(API_URL + '/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.status.toString().startsWith('2')) {
          throw new Error('Invalid credentials')
        }
        return res.json()
      })
      .then((res: IUser) => {
        localStorage.setItem('user', JSON.stringify(res))
        setUser(res)
      })
      .catch((err) => {
        toast.error("Nous n'avons pas réussi à vous connecter")
      })
  }

  const disconnect = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return <AuthContext.Provider value={{ user, isConnected, connect, disconnect }}>{children}</AuthContext.Provider>
}

export default AuthProvider
