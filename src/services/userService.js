import axios from 'axios'

// Instancia de axios con base URL configurada
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

// Función para obtener la lista de usuarios
// Usando async/await (NO .then().catch() anidados - regla del laboratorio)
export async function getUsers(signal) {
  const response = await api.get('/users', { signal })
  return response.data
}

export default api
