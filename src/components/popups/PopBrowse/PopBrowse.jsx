import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Calendar from '../../Calendar/Calendar'
import { getTaskById } from '../../../services/tasks'

function PopBrowse({ token }) {
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    const fetchTask = async () => {
      try {
        const data = await getTaskById(id, token)
        setTask(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchTask()

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [id, token])

  if (isLoading) return <div className="pop-browse">Загрузка...</div>
  if (!task) return <div className="pop-browse">Задача не найдена</div>

  const topicClassMap = {
    'Web Design': '_orange',
    'Research': '_green',
    'Copywriting': '_purple',
  }
  
  const categoryClass = topicClassMap[task.topic] || '_gray'

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div className={`categories__theme theme-top ${categoryClass} _active-category`}>
                <p className={categoryClass}>{task.topic}</p>
              </div>
            </div>
            
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className={`status__theme ${task.status === 'Без статуса' ? '_gray' : '_hide'}`}><p>Без статуса</p></div>
                <div className={`status__theme ${task.status === 'Нужно сделать' ? '_gray' : '_hide'}`}><p>Нужно сделать</p></div>
                <div className={`status__theme ${task.status === 'В работе' ? '_gray' : '_hide'}`}><p>В работе</p></div>
                <div className={`status__theme ${task.status === 'Тестирование' ? '_gray' : '_hide'}`}><p>Тестирование</p></div>
                <div className={`status__theme ${task.status === 'Готово' ? '_gray' : '_hide'}`}><p>Готово</p></div>
              </div>
            </div>
            
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly value={task.description || 'Описание отсутствует'}></textarea>
                </div>
              </form>
              <Calendar dateText={`Срок исполнения: ${new Date(task.date).toLocaleDateString('ru-RU')}`} />
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