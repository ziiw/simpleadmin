import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import catalogs from './catalogs'
import orders from './orders'
import products from './products'

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  catalogs,
  orders,
  products
})
