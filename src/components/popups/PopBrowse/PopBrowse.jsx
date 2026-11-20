import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Calendar from '../../Calendar/Calendar'
import { getTaskById } from '../../../services/tasks'
import { useAuth } from '../../../context/AuthContext'
import { useTasks } from '../../../context/TaskContext'

function PopBrowse() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { token } = useAuth()
  const { deleteTask, updateTask } = useTasks()
  
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [isEditMode, setIsEditMode] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editStatus, setEditStatus] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const controller = new AbortController()
    
    const fetchTask = async () => {
      if (!token) return
      try {
        const data = await getTaskById(id, token, controller.signal)
        setTask(data)
        setEditTitle(data.title)
        setEditDescription(data.description || '')
        setEditStatus(data.status)
      } catch (error) {
        if (error.name !== 'AbortError') setError(error.message)
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
    return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getFullYear()).slice(-2)}`
  }

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить задачу?')) {
      try {
        await deleteTask(id)
        toast.success('Задача удалена')
        navigate('/')
      } catch (err) {
        toast.error(err.message)
      }
    }
  }

  const handleSave = async () => {
    if (!editTitle.trim()) {
      toast.error('Название задачи не может быть пустым')
      return
    }

    try {
      await updateTask(id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        status: editStatus,
        topic: task.topic,
        date: task.date
      })
      setIsEditMode(false)
      setTask({ ...task, title: editTitle.trim(), description: editDescription.trim(), status: editStatus })
      toast.success('Изменения сохранены')
    } catch (err) {
      toast.error(err.message)
    }
  }

  if (isLoading) return <div className="pop-browse">Загрузка...</div>
  if (error || !task) return <div className="pop-browse">Задача не найдена</div>

  const topicClassMap = { 'Web Design': '_orange', 'Research': '_green', 'Copywriting': '_purple' }
  const categoryClass = topicClassMap[task.topic] || '_gray'
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            
            <div className="pop-browse__top-block">
              {isEditMode ? (
                <input 
                  className="pop-browse__ttl" 
                  style={{ 
                    width: '60%', 
                    background: 'transparent', 
                    border: 'none', 
                    outline: 'none', 
                    color: 'inherit', 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    padding: 0 
                  }}
                  value={editTitle} 
                  onChange={(e) => setEditTitle(e.target.value)} 
                />
              ) : (
                <h3 className="pop-browse__ttl">{task.title}</h3>
              )}
              
              <div className={`categories__theme theme-top ${categoryClass} _active-category`}>
                <p>{task.topic}</p>
              </div>
            </div>
            
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => {
                  if (isEditMode) {
                    return (
                      <div 
                        key={status} 
                        className={`status__theme ${editStatus === status ? '_gray' : ''}`}
                        onClick={() => setEditStatus(status)}
                        style={{ cursor: 'pointer', opacity: editStatus === status ? 1 : 0.5 }}
                      >
                        <p>{status}</p>
                      </div>
                    )
                  }
                  return (
                    <div key={status} className={`status__theme ${task.status === status ? '_gray' : '_hide'}`}>
                      <p className={task.status === status ? '_gray' : ''}>{status}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" onSubmit={(e) => e.preventDefault()}>
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea 
                    className="form-browse__area" 
                    name="text" 
                    id="textArea01" 
                    readOnly={!isEditMode} 
                    value={isEditMode ? editDescription : (task.description || 'Описание отсутствует')}
                    onChange={(e) => setEditDescription(e.target.value)}
                    style={{ background: isEditMode ? 'transparent' : '' }}
                  ></textarea>
                </div>
              </form>
              <Calendar dateText="Срок исполнения:" dateValue={formatDate(task.date)} />
            </div>
            
            <div className="pop-browse__btn-browse">
              {!isEditMode ? (
                <>
                  <div className="btn-group">
                    <button className="btn-browse__edit _btn-bor _hover03" onClick={() => setIsEditMode(true)}>Редактировать задачу</button>
                    <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                  </div>
                  <Link to="/" className="btn-browse__close _btn-bg _hover01" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Закрыть</Link>
                </>
              ) : (
                <>
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave}>Сохранить</button>
                    <button className="btn-edit__edit _btn-bor _hover03" onClick={() => {
                      setIsEditMode(false)
                      setEditTitle(task.title)
                      setEditDescription(task.description || '')
                      setEditStatus(task.status)
                    }}>Отменить</button>
                    <button className="btn-edit__delete _btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                  </div>
                  <Link to="/" className="btn-edit__close _btn-bg _hover01" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Закрыть</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse