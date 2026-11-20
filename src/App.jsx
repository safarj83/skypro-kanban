import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './App.styled'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Wrapper>
              <AppRoutes />
              <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </Wrapper>
          </ThemeProvider>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App