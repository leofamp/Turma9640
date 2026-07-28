import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter.jsx'
import Calculadora from './components/Calculadora.jsx'
import ClickButton from './components/ClickButton.jsx'
import Incremente from './components/Incremente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora/>
    <Counter/>
    <ClickButton></ClickButton>
    <Incremente></Incremente>
  </StrictMode>,
)
