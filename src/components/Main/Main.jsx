import { useState, useEffect } from 'react'
import Column from '../Column/Column'
import { cardList } from '../../data'
import { MainWrapper, MainBlock, MainContent, LoadingText } from './Main.styled'

function Main() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

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
          ) : (
            <MainContent>
              {columns.map((columnTitle) => {
                const columnCards = cardList.filter(
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