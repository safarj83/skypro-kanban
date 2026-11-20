import { Link } from 'react-router-dom'
import { useTheme } from '../../../context/ThemeContext'
import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserBtn,
} from './PopUser.styled'

function PopUser({ isOpen, onClose, user }) {
  const { isDark, toggleTheme } = useTheme()
  
  if (!isOpen) return null

  return (
    <PopUserWrapper>
      <PopUserName>{user?.name || 'Пользователь'}</PopUserName>
      <PopUserMail>{user?.login || 'email@example.com'}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input 
          type="checkbox" 
          className="checkbox" 
          name="checkbox" 
          checked={isDark}
          onChange={toggleTheme}
        />
      </PopUserTheme>
      <PopUserBtn type="button" onClick={onClose}>
        <Link to="/exit">Выйти</Link>
      </PopUserBtn>
    </PopUserWrapper>
  )
}

export default PopUser