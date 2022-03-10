import { IconButton } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined'

import { Container, Quantity } from './styles'
import formatValue from '../../utils/formatValue'
import {
useCart} from '../../Providers/cart'

const ProductCart = ({ product }) => {

  const {
    addProduct, delProduct} = useCart()

  return (
    <Container>
      <img src={product.image} alt='produto' />
      <div>
        <h3>{product.title}</h3>
        <h4>{formatValue(product.price * product.quantity)}</h4>
      </div>
      <Quantity>
        <IconButton onClick={() => addProduct(product)}>
          <AddBoxOutlinedIcon />
        </IconButton>
        <span>{product.quantity}</span>
        <IconButton onClick={() => delProduct(product)}>
          <IndeterminateCheckBoxOutlinedIcon />
        </IconButton>
      </Quantity>
    </Container>
  )
}
export default ProductCart
