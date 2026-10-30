import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EAEEF6;
`

const RegBox = styled.div`
  background: #FFF;
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: #000;
`

const StyledLink = styled(Link)`
  color: #565EEF;
  text-decoration: underline;
`

function Register() {
  return (
    <PageContainer>
      <RegBox>
        <Title>Регистрация</Title>
        <StyledLink to="/login">Перейти к входу</StyledLink>
      </RegBox>
    </PageContainer>
  )
}

export default Register