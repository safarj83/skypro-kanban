import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../../services/auth'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EAEEF6;
`

const LoginForm = styled.form`
  background: #FFF;
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  display: flex;
  flex-direction: column;
  width: 368px;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
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

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
`
const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #94A6BE;
`
function Login({ setIsAuth, setToken }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ login: '', password: '' })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const user = await login(formData.login, formData.password)
      localStorage.setItem('token', user.token)
      setToken(user.token)
      setIsAuth(true)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Вход</Title>
        {error && <ErrorText>{error}</ErrorText>}
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