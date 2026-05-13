import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>404 La página que buscas no existe.</p>
      <Link to="/">← Volver al inicio</Link>
    </div>
  )
}

export default NotFound
