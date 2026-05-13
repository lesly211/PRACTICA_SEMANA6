import { useState, useEffect } from 'react'
import { getUsers } from '../services/userService'

// Hook personalizado que encapsula la lógica de fetch
// Maneja los tres estados: loading, data, error
function useUsers() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // AbortController para cancelar la petición si el componente se desmonta
    // Esto evita renderizado innecesario tras fetch (cleanup en useEffect)
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const users = await getUsers(controller.signal)
        setData(users)
      } catch (err) {
        // Ignorar error de cancelación (AbortError es esperado al desmontar)
        if (err.name !== 'CanceledError') {
          setError('Error al cargar usuarios. Intenta de nuevo.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup: cancela la petición si el componente se desmonta antes de terminar
    return () => controller.abort()
  }, []) // [] = solo se ejecuta una vez al montar

  return { data, loading, error }
}

export default useUsers
