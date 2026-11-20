const BASE_URL = 'https://wedev-api.sky.pro/api'

export const getTasks = async (token, signal) => {
  const response = await fetch(`${BASE_URL}/kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при загрузке задач')
  }

  return data.tasks
}

export const getTaskById = async (id, token, signal) => {
  const response = await fetch(`${BASE_URL}/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при загрузке задачи')
  }

  return data.task
}

export const addTask = async (token, taskData) => {
  const response = await fetch(`${BASE_URL}/kanban`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при создании задачи')
  }

  return data.tasks
}

export const deleteTask = async (id, token) => {
  const response = await fetch(`${BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при удалении задачи')
  }

  return data.tasks
}

export const updateTask = async (id, token, taskData) => {
  const response = await fetch(`${BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при обновлении задачи')
  }
  
  return data.tasks
}