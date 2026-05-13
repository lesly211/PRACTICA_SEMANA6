import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <span>IS093A - Práctica Semana 6</span>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/lista">Lista</NavLink>
      <NavLink to="/formulario">Formulario</NavLink>
    </nav>
  )
}

export default Navbar
