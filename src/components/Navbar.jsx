import { NavLink } from 'react-router-dom'

// NavLink aplica clase "active" automáticamente a la ruta actual
// Usamos esa clase en index.css para feedback visual
function Navbar() {
  return (
    <nav>
      <span>IS093A - SPA Semana 6</span>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/lista">Lista</NavLink>
      <NavLink to="/formulario">Formulario</NavLink>
    </nav>
  )
}

export default Navbar
