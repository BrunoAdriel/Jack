import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Entrada from './Components/Entrada'
import ItemDetailContainer from './Productos/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './Components/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      {/* <Entrada/>
{/* //esto se encuentra comentado por que tengo problemas con la interfaz, se muestra al principio de todas las paginas // */}
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>} />
        <Route path={'/category/:id'} element={<ItemListContainer/>} />
        <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
      
        <Route path={'/cart'} element={<CartWidget/>} />

      

      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
