import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

function Exit() {
  const { logout } = useAuth()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleExit = () => {
    logout()
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
            <a href="/" className="pop-exit__exit-no _hover03">Нет, остаться</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exit