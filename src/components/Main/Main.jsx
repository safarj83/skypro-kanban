import { useState, useEffect } from 'react'
import Column from '../Column/Column'
import { getTasks } from '../../services/tasks'
import { MainWrapper, MainBlock, MainContent, LoadingText } from './Main.styled'
import styled from 'styled-components'

const ErrorText = styled.div`
  text-align: center;
  color: red;
  padding: 50px 0;
  font-size: 18px;
`

function Main({ token }) {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks(token)
        setTasks(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [token])

  const columns = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
  ]

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <LoadingText>Данные загружаются...</LoadingText>
          ) : error ? (
            <ErrorText>{error}</ErrorText>
          ) : (
            <MainContent>
              {columns.map((columnTitle) => {
                const columnCards = tasks.filter(
                  (card) => card.status === columnTitle
                )
                return (
                  <Column
                    key={columnTitle}
                    title={columnTitle}
                    cards={columnCards}
                  />
                )
              })}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </MainWrapper>
  )
}

export default Main