import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../../services/auth'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EAEEF6;
`

const RegForm = styled.form`
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

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', login: '', password: '' })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      await register(formData.name, formData.login, formData.password)
      navigate('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageContainer>
      <RegForm onSubmit={handleRegister}>
        <Title>Регистрация</Title>
        {error && <ErrorText>{error}</ErrorText>}
        <Input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} required />
        <Input type="text" name="login" placeholder="Эл. почта" value={formData.login} onChange={handleChange} required />
        <Input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required />
        <Button type="submit" disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}</Button>
        <StyledLink to="/login">Уже есть аккаунт? Войти</StyledLink>
      </RegForm>
    </PageContainer>
  )
}

export default Register