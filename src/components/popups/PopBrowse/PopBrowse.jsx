import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Calendar from '../../Calendar/Calendar'
import { getTaskById } from '../../../services/tasks'
import { useAuth } from '../../../context/AuthContext'
import { useTasks } from '../../../context/TaskContext'

function PopBrowse() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { token } = useAuth()
  const { deleteTask } = useTasks()
  
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const controller = new AbortController()
    
    const fetchTask = async () => {
      if (!token) return
      
      try {
        const data = await getTaskById(id, token, controller.signal)
        setTask(data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchTask()

    return () => {
      document.body.style.overflow = 'unset'
      controller.abort()
    }
  }, [id, token])

  const formatDate = (dateString) => {
    if (!dateString) return '30.10.23'
    const d = new Date(dateString)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = String(d.getFullYear()).slice(-2)
    return `${day}.${month}.${year}`
  }

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить задачу?')) {
      try {
        await deleteTask(id)
        navigate('/')
      } catch (err) {
        alert(err.message)
      }
    }
  }

  const handleEdit = () => {
    alert('Редактирование задачи будет доступно позже')
  }

  if (isLoading) return <div className="pop-browse">Загрузка...</div>
  if (error || !task) return <div className="pop-browse">Задача не найдена</div>

  const topicClassMap = {
    'Web Design': '_orange',
    'Research': '_green',
    'Copywriting': '_purple',
  }
  
  const categoryClass = topicClassMap[task.topic] || '_gray'
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

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
                {statuses.map((status) => (
                  <div 
                    key={status} 
                    className={`status__theme ${task.status === status ? '_gray' : '_hide'}`}
                  >
                    <p className={task.status === status ? '_gray' : ''}>{status}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pop-browse__wrap">
              {/* Убрали action="#" и добавили onSubmit чтобы страница не прыгала */}
              <form className="pop-browse__form form-browse" id="formBrowseCard" onSubmit={(e) => e.preventDefault()}>
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly value={task.description || 'Описание отсутствует'}></textarea>
                </div>
              </form>
              <Calendar dateText={`Срок исполнения: ${formatDate(task.date)}`} />
            </div>
            
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03" onClick={handleEdit}>
                  Редактировать задачу
                </button>
                <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
                  Удалить задачу
                </button>
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