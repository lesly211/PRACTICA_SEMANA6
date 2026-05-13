import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1>Bienvenido a la SPA - Semana 6</h1>
      <p style={{ marginBottom: '24px', color: '#555' }}>
        Aplicación de una sola página (SPA) construida con React + Vite +
        React Router DOM + Axios. Navega usando el menú superior.
      </p>
      <p style={{ marginBottom: '24px', color: '#555' }}>
        ESTUDIANTE: NAVARRO SERVA, LESLY BRENDA
      </p>

      {/* Renderizado condicional simple con && */}
      {true && (
        <div className="card">
          <h3>Tecnologías usadas</h3>
          <p>React 18 · Vite · React Router DOM v6 · Axios · JSONPlaceholder API</p>
        </div>
      )}

      <div className="card">
        <h3>Páginas disponibles</h3>
        <p>
          <Link to="/lista" style={{ color: '#3498db' }}>→ Lista de usuarios</Link>
          {' '}(consume la API con Axios + async/await)
        </p>
        <p style={{ marginTop: '8px' }}>
          <Link to="/formulario" style={{ color: '#3498db' }}>→ Formulario</Link>
          {' '}(formulario controlado con useState)
        </p>
      </div>
    </div>
  )
}

export default Home
