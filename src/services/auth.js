const BASE_URL = 'https://wedev-api.sky.pro/api'

export const login = async (login, password) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при входе')
  }
  
  return data.user // Возвращает объект пользователя с токеном
}

export const register = async (name, login, password) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify({ name, login, password }),
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Ошибка при регистрации')
  }
  
  return data.result // Возвращает созданного пользователя
}