import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import catalog from './catalog'
import orders from './orders'

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  catalog,
  orders
})
