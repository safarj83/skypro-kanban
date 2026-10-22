import { Link } from 'react-router-dom'
import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserBtn,
} from './PopUser.styled'

function PopUser({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <PopUserWrapper>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
         <PopUserBtn type="button" onClick={onClose}>
        <Link to="/exit">Выйти</Link>
      </PopUserBtn>
    </PopUserWrapper>
  )
}

export default PopUser