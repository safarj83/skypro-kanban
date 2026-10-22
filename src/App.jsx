import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './App.styled'
import AppRoutes from './AppRoutes'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App