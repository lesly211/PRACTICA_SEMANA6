import { useState } from 'react'

// Paso 4: Formulario controlado con useState
// Cada input tiene su valor ligado al estado y actualiza con onChange
function Form() {
  // Estado del formulario (controlled inputs)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  // Mensaje de éxito tras enviar
  const [enviado, setEnviado] = useState(false)

  // Errores de validación
  const [errores, setErrores] = useState({})

  // Handler genérico para todos los inputs (reutilizable)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    setErrores((prev) => ({ ...prev, [name]: '' }))
  }

  // Validación básica
  const validar = () => {
    const nuevosErrores = {}
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido.'
    if (!form.email.includes('@')) nuevosErrores.email = 'Ingresa un email válido.'
    if (!form.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje no puede estar vacío.'
    return nuevosErrores
  }

  // Handler del submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const erroresEncontrados = validar()
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      return
    }

    // Aquí iría la petición POST con axios en un caso real
    console.log('Formulario enviado:', form)
    setEnviado(true)

    // Resetear formulario
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="container">
      <h1>Formulario de Contacto</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
        />
        {/* Renderizado condicional de error con && */}
        {errores.nombre && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-10px', marginBottom: '10px' }}>{errores.nombre}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />
        {errores.email && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-10px', marginBottom: '10px' }}>{errores.email}</p>}

        <label>Mensaje</label>
        <input
          type="text"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje"
        />
        {errores.mensaje && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-10px', marginBottom: '10px' }}>{errores.mensaje}</p>}

        <button type="submit">Enviar</button>
      </form>

      {/* Renderizado condicional: mensaje de éxito con ternario */}
      {enviado
        ? <p className="success">✅ ¡Formulario enviado correctamente!</p>
        : null
      }
    </div>
  )
}

export default Form
