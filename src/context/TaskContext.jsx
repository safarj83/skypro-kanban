import { createContext, useState, useContext, useCallback } from 'react'
import { getTasks, addTask as addTaskApi, deleteTask as deleteTaskApi, updateTask as updateTaskApi } from '../services/tasks'
import { useAuth } from './AuthContext'

const TaskContext = createContext(null)

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { token } = useAuth()

  const fetchTasks = useCallback(async (signal) => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getTasks(token, signal) 
      setTasks(data)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message)
      }
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

  const updateTask = useCallback(async (id, taskData) => {
    const updatedTasks = await updateTaskApi(id, token, taskData)
    setTasks(updatedTasks)
  }, [token])

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, fetchTasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)