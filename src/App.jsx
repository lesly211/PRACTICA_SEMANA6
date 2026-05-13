import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import Form from './pages/Form'
import NotFound from './pages/NotFound'

// Paso 2: Configurar enrutamiento con BrowserRouter (NO HashRouter)
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<List />} />
        <Route path="/formulario" element={<Form />} />
        {/* Ruta comodín para 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
