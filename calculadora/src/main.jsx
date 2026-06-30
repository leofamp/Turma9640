import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import ClickButton from './components/ClickButton.jsx'
import Contador from './components/Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <ClickButton/>
    <Contador/>
  </StrictMode>,
)
