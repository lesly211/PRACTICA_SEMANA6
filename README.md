# SPA Semana 6 - IS093A
## Desarrollo de Aplicaciones Web - UNCP

### Cómo ejecutar el proyecto

1. Instalar dependencias:
```
npm install
```

2. Iniciar servidor de desarrollo:
```
npm run dev
```

3. Abrir en el navegador: http://localhost:5173

---

### Estructura del proyecto

```
src/
├── pages/
│   ├── Home.jsx        → Página de inicio
│   ├── List.jsx        → Lista de usuarios (consume API)
│   ├── Form.jsx        → Formulario controlado
│   └── NotFound.jsx    → Página 404
├── components/
│   └── Navbar.jsx      → Navegación con NavLink
├── services/
│   └── userService.js  → Axios + llamadas a la API
├── hooks/
│   └── useUsers.js     → Hook personalizado con loading/data/error
├── App.jsx             → Enrutamiento con BrowserRouter
├── main.jsx            → Punto de entrada
└── index.css           → Estilos globales
```

