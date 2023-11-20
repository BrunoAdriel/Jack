import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Entrada from './Components/Entrada'
import Productos from './Productos/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <Entrada/>
      
      <ItemListContainer/>
      
      <Productos/>
  
    </>
  )
}

export default App
