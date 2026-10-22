import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
`

function Login({ setIsAuth }) {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuth(true)
    navigate('/')
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Вход</Title>
        <Input type="text" name="email" id="email" placeholder="Эл. почта" required />
        <Input type="password" name="password" id="password" placeholder="Пароль" required />
        <Button type="submit">Войти</Button>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login