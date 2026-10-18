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
        <a href="#popExit">Выйти</a>
      </PopUserBtn>
    </PopUserWrapper>
  )
}

export default PopUser