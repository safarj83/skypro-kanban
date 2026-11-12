import { createContext, useState, useContext, useCallback } from 'react'
import { getTasks, addTask as addTaskApi, deleteTask as deleteTaskApi } from '../services/tasks'
import { useAuth } from './AuthContext'

const TaskContext = createContext(null)

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { token } = useAuth()

  const fetchTasks = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getTasks(token)
      setTasks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [token])

  const addTask = useCallback(async (taskData) => {
    const updatedTasks = await addTaskApi(token, taskData)
    setTasks(updatedTasks)
  }, [token])

  const deleteTask = useCallback(async (id) => {
    const updatedTasks = await deleteTaskApi(id, token)
    setTasks(updatedTasks)
  }, [token])

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, fetchTasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)