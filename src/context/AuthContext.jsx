import { createContext, useState, useContext } from 'react'
import { login as loginApi, register as registerApi } from '../services/auth'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('token'))
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)

  const login = async (loginData, password) => {
    const user = await loginApi(loginData, password)
    localStorage.setItem('token', user.token)
    setToken(user.token)
    setIsAuth(true)
    return user
  }

  const register = async (name, loginData, password) => {
    return await registerApi(name, loginData, password)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)