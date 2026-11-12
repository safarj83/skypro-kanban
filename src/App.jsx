import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './App.styled'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyle />
          <Wrapper>
            <AppRoutes />
          </Wrapper>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App