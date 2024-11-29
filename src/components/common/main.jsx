import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../../assets/styles/indexReact.css'
// import App from '../common/App.jsx'
import Routing from './Routing.jsx'
import AuthProvider from '../../auth/AuthProvider.jsx'
import SocketProvider from '../../sockets/SocketProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SocketProvider>
        <Routing />
      </SocketProvider>
    </AuthProvider>
  </StrictMode>,
)
