import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'

import NavBar from './Components/NavBar'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Header />
      <h1>ToDo</h1>
    </div>
  )
}

export default App
