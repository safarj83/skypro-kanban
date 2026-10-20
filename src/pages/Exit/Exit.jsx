import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EAEEF6;
`

const ExitBox = styled.div`
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

const PrimaryButton = styled.button`
  background: #565EEF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`

const SecondaryButton = styled.button`
  background: transparent;
  color: #565EEF;
  border: 1px solid #565EEF;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`

function Exit({ setIsAuth }) {
  const navigate = useNavigate()

  const handleExit = () => {
    setIsAuth(false)
    navigate('/login')
  }

  return (
    <PageContainer>
      <ExitBox>
        <Title>Выйти из аккаунта?</Title>
        <ButtonGroup>
          <PrimaryButton onClick={handleExit}>Да, выйти</PrimaryButton>
          <SecondaryButton onClick={() => navigate('/')}>Нет, остаться</SecondaryButton>
        </ButtonGroup>
      </ExitBox>
    </PageContainer>
  )
}

export default Exit