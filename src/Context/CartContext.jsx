import React, { useContext, useState } from 'react'

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

// Se crea un State con el array vacio para poder guardar todas la funciones, para despues pasar a esta completo por lo que tenga el carrito

    const [cart, setCart] = useState([]);

    // agregar producto por id 

    const addProduct = (item, quantity, infoSize) => {
        if(isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id ?{
                        ...product, quantity: product.quantity + quantity, infoSize
                    } : product;
                })
            );
        } else {
            setCart([...cart, {...item, quantity, infoSize}]);
        }
    }

// Calcular total de producto mas cantidad

const totalPrice = () =>{
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
};

// console.log(cart)


// const totalPrice = () => {
//     return cart.reduce((prev, product) => {
//         const productPrice = parseFloat(product.price);
//         const productQuantity = parseInt(product.quantity);

//         if (!isNaN(productPrice) && !isNaN(productQuantity)) {
//             return prev + productQuantity * productPrice;
//         } else {
//             console.error(`Invalid quantity or price for product: ${JSON.stringify(product)}`);
//             return prev;
//         }
//     }, 0);
// };


// Calcular total de los productos

const totalProducts = () =>
    cart.reduce( (acum, prodActual) => acum + prodActual.quantity, 0 );

// Limpiar Carro

const clearCart = () => setCart([]);

// Para ver si se encuentra dentro del carrito 

const isInCart = (id) => 
    cart.find((product)=> product.id === id) ? true : false;

// Para eliminar del carrito 

const removeProduct = (id) =>
    setCart(cart.filter((p) => p.id !== id));


//  el contexto en provedor para poder llamar las funciones en otras paginas

return (
    <CartContext.Provider
        value={{
            addProduct,
            totalPrice,
            totalProducts,
            clearCart,
            isInCart,
            removeProduct,
            cart,
        }}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider;