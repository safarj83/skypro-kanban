import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Board from './pages/Board/Board'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Card from './pages/Card/Card'
import NewTask from './pages/NewTask/NewTask'
import Exit from './pages/Exit/Exit'
import NotFound from './pages/NotFound/NotFound'

function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<Register />} />
      
      <Route 
        path="/" 
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Board />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/card/:id" 
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Card />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/new-task" 
        element={
          <ProtectedRoute isAuth={isAuth}>
            <NewTask />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/exit" 
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Exit setIsAuth={setIsAuth} />
          </ProtectedRoute>
        } 
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes