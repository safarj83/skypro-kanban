import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUser from '../popups/PopUser/PopUser'
import { useTheme } from '../../context/ThemeContext'
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  MainNewButton,
  HeaderUser,
} from './Header.styled'

function Header() {
  const [isUserOpen, setIsUserOpen] = useState(false)
  const { isDark } = useTheme()

  const toggleUser = () => {
    setIsUserOpen((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              {}
              <img 
                src={isDark ? "/images/logo_dark.png" : "/images/logo.png"} 
                alt="logo" 
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <MainNewButton id="btnMainNew">
              <Link to="/new-task">Создать новую задачу</Link>
            </MainNewButton>
            <HeaderUser
              onClick={(e) => {
                e.preventDefault()
                toggleUser()
              }}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUser isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  )
}

export default Header