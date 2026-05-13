import { useState, useEffect } from 'react'
import { getUsers } from '../services/userService'

function useUsers() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            const controller = new AbortController()

            const fetchData = async() => {
                try {
                    setLoading(true)
                    setError(null)
                    const users = await getUsers(controller.signal)
                    setData(users)
                } catch (err) {
                    if (err.name !== 'CanceledError') {
                        setError('Error al cargar usuarios. Intenta de nuevo.')
                    }
                } finally {
                    setLoading(false)
                }
            }

            fetchData()
            return () => controller.abort()
        }, []) // [] = solo se ejecuta una vez al montar

    return { data, loading, error }
}

export default useUsers