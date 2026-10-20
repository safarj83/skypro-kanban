import { useState } from 'react'
import PopUser from '../popups/PopUser/PopUser'
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

  const toggleUser = () => {
    setIsUserOpen((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <MainNewButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainNewButton>
            <HeaderUser
              href="#user-set-target"
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