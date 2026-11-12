import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Card from './pages/Card/Card'
import NewTask from './pages/NewTask/NewTask'
import Exit from './pages/Exit/Exit'
import NotFound from './pages/NotFound/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/" element={null} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/exit" element={<Exit />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes