import { useState, useEffect } from 'react'
import Column from '../Column/Column'
import { cardList } from '../../data'

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading">Данные загружаются...</div>
          ) : (
            <div className="main__content">
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
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main