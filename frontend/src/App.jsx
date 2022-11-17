import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <h1>ToDo</h1>
    </div>
  )
}

export default App
