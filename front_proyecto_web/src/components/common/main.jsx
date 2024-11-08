import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../assets/styles/index.css'
import App from '../common/App.jsx'
import Routing from './Routing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
