import { createContext, useState, useContext } from 'react'
import { login as loginApi, register as registerApi } from '../services/auth'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('token'))
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = async (loginData, password) => {
    const userData = await loginApi(loginData, password)
    
    localStorage.setItem('token', userData.token)
    localStorage.setItem('user', JSON.stringify({ name: userData.name, login: userData.login }))
    
    setToken(userData.token)
    setUser({ name: userData.name, login: userData.login })
    setIsAuth(true)
    return userData
  }

  const register = async (name, loginData, password) => {
    return await registerApi(name, loginData, password)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)