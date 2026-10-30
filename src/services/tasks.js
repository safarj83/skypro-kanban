const BASE_URL = 'https://wedev-api.sky.pro/api'

export const getTasks = async (token) => {
  const response = await fetch(`${BASE_URL}/kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при загрузке задач')
  }
  
  return data.tasks
}

export const getTaskById = async (id, token) => {
  const response = await fetch(`${BASE_URL}/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при загрузке задачи')
  }
  
  return data.task
}