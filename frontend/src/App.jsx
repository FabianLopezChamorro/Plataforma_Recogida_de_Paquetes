import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'

import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Recoger from './Components/Recoger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Header />
      <Recoger />
      <h1>ToDo</h1>
    </div>
  )
}

export default App
