import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Entrada from './Components/Entrada'
import ItemDetailContainer from './Productos/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Context/CartContext'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import RegisterProvider from './Context/RegisterContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div>
      <Entrada/>
 //esto se encuentra comentado por que tengo problemas con la interfaz, se muestra al principio de todas las paginas //
      </div> */}
        <RegisterProvider>
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>} />
        <Route path={'/category/:id'} element={<ItemListContainer/>} />
        <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
        <Route path={'/cart'} element={<Cart/>} />
        

        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/registro'} element={<Register/>}/>


      
        </Routes>
        </RegisterProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
