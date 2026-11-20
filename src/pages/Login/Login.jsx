import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

const LoginForm = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  width: 368px;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const Button = styled.button`
  background: #565EEF;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  
  &:disabled {
    background: #94A6BE;
    cursor: not-allowed;
  }
`

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({ login: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(formData.login, formData.password)
      navigate('/')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Вход</Title>
        <Input 
          type="text" 
          name="login" 
          placeholder="Эл. почта" 
          value={formData.login} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Пароль" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Войти'}
        </Button>
        <StyledLink to="/register">Нужно зарегистрироваться?</StyledLink>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login