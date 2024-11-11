import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../../assets/styles/indexReact.css'
// import App from '../common/App.jsx'
import Routing from './Routing.jsx'
import AuthProvider from '../../auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </StrictMode>,
)
