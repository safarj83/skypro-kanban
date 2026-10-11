import Column from '../Column/Column'

function Main() {
  const columnsData = [
    {
      title: 'Без статуса',
      cards: [
        { title: 'Название задачи', category: 'Web Design', date: '30.10.23', categoryClass: '_orange' },
        { title: 'Название задачи', category: 'Research', date: '30.10.23', categoryClass: '_green' },
        { title: 'Название задачи', category: 'Web Design', date: '30.10.23', categoryClass: '_orange' },
        { title: 'Название задачи', category: 'Copywriting', date: '30.10.23', categoryClass: '_purple' },
        { title: 'Название задачи', category: 'Web Design', date: '30.10.23', categoryClass: '_orange' },
      ],
    },
    {
      title: 'Нужно сделать',
      cards: [
        { title: 'Название задачи', category: 'Research', date: '30.10.23', categoryClass: '_green' },
      ],
    },
    {
      title: 'В работе',
      cards: [
        { title: 'Название задачи', category: 'Research', date: '30.10.23', categoryClass: '_green' },
        { title: 'Название задачи', category: 'Copywriting', date: '30.10.23', categoryClass: '_purple' },
        { title: 'Название задачи', category: 'Web Design', date: '30.10.23', categoryClass: '_orange' },
      ],
    },
    {
      title: 'Тестирование',
      cards: [
        { title: 'Название задачи', category: 'Research', date: '30.10.23', categoryClass: '_green' },
      ],
    },
    {
      title: 'Готово',
      cards: [
        { title: 'Название задачи', category: 'Research', date: '30.10.23', categoryClass: '_green' },
      ],
    },
  ]

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnsData.map((column, index) => (
              <Column
                key={index}
                title={column.title}
                cards={column.cards}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main