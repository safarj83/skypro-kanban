import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

function Exit() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleExit = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <div className="pop-exit__form-group">
            <button className="pop-exit__exit-yes _hover01" onClick={handleExit}>Да, выйти</button>
            <button className="pop-exit__exit-no _hover03" onClick={() => navigate('/')}>Нет, остаться</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exit