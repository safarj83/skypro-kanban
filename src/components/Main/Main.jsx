import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Column from '../Column/Column'
import { MainWrapper, MainBlock, MainContent, LoadingText } from './Main.styled'
import styled from 'styled-components'
import { useTasks } from '../../context/TaskContext'

const ErrorText = styled.div`
  text-align: center;
  color: red;
  padding: 50px 0;
  font-size: 18px;
`

function Main() {
  const { tasks, isLoading, error, fetchTasks } = useTasks()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      fetchTasks()
    }
  }, [location.pathname, fetchTasks])

  const columns = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

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
                const columnCards = tasks.filter((card) => card.status === columnTitle)
                return <Column key={columnTitle} title={columnTitle} cards={columnCards} />
              })}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </MainWrapper>
  )
}

export default Main