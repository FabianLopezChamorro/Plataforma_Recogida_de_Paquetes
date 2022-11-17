import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'

import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Recoger from './Components/Recoger'
import Equipo from './Components/Equpo'
import Contacto from './Components/Contacto'
import Nosotros from './Components/Nosotros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Header />
      <Recoger />
      <Nosotros />
      <Equipo />
      <Contacto />
    </div>
  )
}

export default App
