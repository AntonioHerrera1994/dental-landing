import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nosotros from './components/Nosotros.jsx'
import Servicios from './components/Servicios.jsx'
import StepGuide from './components/Beneficios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nosotros />
    <Servicios />
    <StepGuide />
  </StrictMode>,
)
