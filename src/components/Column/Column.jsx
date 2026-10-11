import Card from '../Card/Card'

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            category={card.category}
            date={card.date}
            categoryClass={card.categoryClass}
          />
        ))}
      </div>
    </div>
  )
}

export default Column