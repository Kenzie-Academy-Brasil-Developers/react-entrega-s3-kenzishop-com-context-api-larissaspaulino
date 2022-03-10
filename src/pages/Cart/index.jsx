import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import formatValue from '../../utils/formatValue'
import { useHistory } from 'react-router-dom'

import ProductCart from '../../components/ProductCart'
import { Container } from './styles'
import Header from '../../components/Header'
import { useCart } from '../../Providers/cart'

const Cart = () => {
  const history = useHistory()

  const { cart } = useCart()

  return (
    <>
      <Header />
      <Container>
        <ul>
          {cart.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </ul>
        <div>
          <h3>Resumo da compra:</h3>
          <p>
            {formatValue(
              cart.reduce(
                (acc, product) =>
                  Number(product.price * product.quantity) + acc,
                0
              )
            )}
          </p>
          <Button
            variant='contained'
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: '#c85311',
              '&:hover': { backgroundColor: '#80CEE1' },
            }}
            onClick={() => history.push('/login')}
          >
            Finalizar compra
          </Button>
        </div>
      </Container>
    </>
  )
}
export default Cart
