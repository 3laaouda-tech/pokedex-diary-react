import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Favorites() {
  return <h1>Pokemon Favorites Page</h1>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Favorites />
  </StrictMode>,
)
