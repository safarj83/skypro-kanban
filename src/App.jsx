import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './App.styled'
import AppRoutes from './AppRoutes'

function App() {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('token'))
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <AppRoutes 
            isAuth={isAuth} 
            setIsAuth={setIsAuth} 
            token={token}
            setToken={setToken}
          />
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App