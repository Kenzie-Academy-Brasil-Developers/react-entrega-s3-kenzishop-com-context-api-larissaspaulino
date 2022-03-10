import { ListProductsProvider } from './products'
import { CartProvider } from './cart'
import { UserProvider } from './user'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ListProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ListProductsProvider>
    </UserProvider>
  )
}

export default Providers
