import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Calendar from '../../Calendar/Calendar'
import { cardList } from '../../../data'

function PopBrowse() {
  const { id } = useParams()

  const currentCard = cardList.find((card) => card.id === Number(id))

  const topicClassMap = {
    'Web Design': '_orange',
    'Research': '_green',
    'Copywriting': '_purple',
  }
  
  const currentTopic = currentCard?.topic || 'Web Design'
  const categoryClass = topicClassMap[currentTopic] || '_gray'

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {currentCard ? currentCard.title : 'Название задачи'}
              </h3>
              <div className={`categories__theme theme-top ${categoryClass} _active-category`}>
                <p className={categoryClass}>{currentTopic}</p>
              </div>
            </div>
            
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide"><p>Без статуса</p></div>
                <div className="status__theme _gray"><p className="_gray">Нужно сделать</p></div>
                <div className="status__theme _hide"><p>В работе</p></div>
                <div className="status__theme _hide"><p>Тестирование</p></div>
                <div className="status__theme _hide"><p>Готово</p></div>
              </div>
            </div>
            
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              <Calendar dateText="Срок исполнения: 09.09.23" />
            </div>
            
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
              </div>
              <Link to="/" className="btn-browse__close _btn-bg _hover01" style={{ display: 'flex', alignItems: 'center' }}>Закрыть</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse