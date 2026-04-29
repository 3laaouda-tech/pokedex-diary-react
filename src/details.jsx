import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Details() {
  return <h1>Pokemon Details Page</h1>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details />
  </StrictMode>,
)
