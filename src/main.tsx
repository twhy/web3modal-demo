import React from 'react'
import ReactDOM from 'react-dom/client'
import { Web3ModalProvider } from './Web3ModalProvider'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>,
)
