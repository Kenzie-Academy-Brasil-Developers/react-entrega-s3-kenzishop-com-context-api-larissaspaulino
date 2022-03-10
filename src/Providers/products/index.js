import { createContext, useState, useContext } from 'react'
import api from '../../services/api'

const ListProductsContext = createContext()

export const ListProductsProvider = ({ children }) => {

  const [listProducts, setListProducts] = useState([])

  const getProducts = (setLoading) => {
    api
      .get('/products')
      .then((res) => {
        setLoading(false)
        setListProducts(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <ListProductsContext.Provider value={{ listProducts, getProducts }}>
      {children}
    </ListProductsContext.Provider>
  )
}

export const useListProducts = () => useContext(ListProductsContext)
