import useUsers from '../hooks/useUsers'

// Componente tarjeta individual (separado para reutilización)
function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>📧 {user.email}</p>
      <p>🏠 {user.address.city} · 🌐 {user.website}</p>
    </div>
  )
}

// Paso 3 y 4: Consumo de API + renderizado iterativo y condicional
function List() {
  const { data: users, loading, error } = useUsers()

  return (
    <div className="container">
      <h1>Lista de Usuarios</h1>
      <p style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
        Datos obtenidos de: jsonplaceholder.typicode.com/users
      </p>

      {/* Renderizado condicional: estado de carga */}
      {loading && <p className="loading">⏳ Cargando usuarios...</p>}

      {/* Renderizado condicional: estado de error */}
      {error && <p className="error">⚠️ {error}</p>}

      {/* Renderizado condicional + iterativo: lista de usuarios */}
      {/* Usamos user.id como key (único y estable, NO el index) */}
      {!loading && !error && users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {/* Renderizado condicional con ternario: lista vacía */}
      {!loading && !error && users.length === 0
        ? <p>No hay usuarios disponibles.</p>
        : null
      }
    </div>
  )
}

export default List
