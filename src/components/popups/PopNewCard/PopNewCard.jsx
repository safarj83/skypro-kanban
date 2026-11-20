import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Calendar from '../../Calendar/Calendar'
import { useTasks } from '../../../context/TaskContext'

function PopNewCard() {
  const navigate = useNavigate()
  const { addTask } = useTasks()
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [topic, setTopic] = useState('Web Design')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim()) {
      setError('Название задачи не может быть пустым или состоять из пробелов')
      return
    }
    
    setIsLoading(true)
    setError(null)

    try {
      await addTask({
        title: title.trim(),
        description: description.trim(),
        topic,
        status: 'Без статуса',
        date: new Date().toISOString(),
      })
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">✖</Link>
            
            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input 
                    className="form-new__input" 
                    type="text" 
                    id="formTitle" 
                    placeholder="Введите название задачи..." 
                    autoComplete="off" 
                    autoFocus 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea 
                    className="form-new__area" 
                    id="textArea" 
                    placeholder="Введите описание задачи..."
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar dateText="Выберите срок исполнения" />
            </div>
            
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div 
                  className={`categories__theme _orange ${topic === 'Web Design' ? '_active-category' : ''}`}
                  onClick={() => setTopic('Web Design')}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div 
                  className={`categories__theme _green ${topic === 'Research' ? '_active-category' : ''}`}
                  onClick={() => setTopic('Research')}
                >
                  <p className="_green">Research</p>
                </div>
                <div 
                  className={`categories__theme _purple ${topic === 'Copywriting' ? '_active-category' : ''}`}
                  onClick={() => setTopic('Copywriting')}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="form-new__create _hover01" 
              disabled={isLoading} 
              form="formNewCard"
            >
              {isLoading ? 'Создание...' : 'Создать задачу'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard