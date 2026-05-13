import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export async function getUsers(signal) {
    const response = await api.get('/users', { signal })
    return response.data
}

export default api