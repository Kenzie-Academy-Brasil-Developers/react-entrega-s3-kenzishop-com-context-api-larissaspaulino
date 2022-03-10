import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { Container } from './styles'

import Product from '../../components/Product'
import Header from '../../components/Header'
import { useListProducts } from '../../Providers/products'

const Home = () => {
  const { listProducts, getProducts } = useListProducts()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts(setLoading)
  })

  if (loading) {
    return <CircularProgress sx={{ margin: '45%' }} size={50} />
  }

  return (
    <>
      <Header />
      <Container>
        {listProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    </>
  )
}
export default Home
