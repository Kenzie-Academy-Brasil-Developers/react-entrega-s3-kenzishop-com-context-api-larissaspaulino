import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('@cart')) || []
  )

  const addProduct = (product) => {
    if (cart.find((prod) => product.id === prod.id)) {
      product.quantity++
      setCart([...cart])
      localStorage.setItem('@cart', JSON.stringify(cart))
    } else {
      product.quantity = 1
      setCart([...cart, product])
      localStorage.setItem('@cart', JSON.stringify([...cart, product]))
    }
  }

  const delProduct = (product) => {
    if (product.quantity === 1) {
      const newCart = cart.filter((prod) => prod.id !== product.id)
      setCart(newCart)
      localStorage.setItem('@cart', JSON.stringify(newCart))
    } else {
      product.quantity--
      setCart([...cart])
      localStorage.setItem('@cart', JSON.stringify(cart))
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, delProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
