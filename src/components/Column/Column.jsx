import { Droppable } from '@hello-pangea/dnd'
import Card from '../Card/Card'
import { ColumnWrapper, ColumnTitle, CardsContainer } from './Column.styled'

function Column({ title, cards }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      
      <Droppable droppableId={title}>
        {(provided) => (
          <CardsContainer 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            style={{ minHeight: '50px' }} 
          >
            {cards.length === 0 ? (
              <p style={{ 
                color: '#94A6BE', 
                fontSize: '14px', 
                padding: '10px 15px', 
                textAlign: 'left',
                opacity: 0.7 
              }}>
                Новых задач нет
              </p>
            ) : (
              cards.map((card, index) => (
                <Card
                  key={card._id}
                  id={card._id}
                  index={index} 
                  title={card.title}
                  topic={card.topic}
                  date={card.date}
                />
              ))
            )}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </ColumnWrapper>
  )
}

export default Column