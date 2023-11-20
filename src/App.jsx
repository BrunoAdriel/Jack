import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Entrada from './Components/Entrada'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <Entrada/>
      <div>
      <ItemListContainer/>
      </div>
    </>
  )
}

export default App
