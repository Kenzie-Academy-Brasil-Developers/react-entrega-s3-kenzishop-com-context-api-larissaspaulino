import { Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Route from './route'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
    </Switch>
  )
}
export default Routes
