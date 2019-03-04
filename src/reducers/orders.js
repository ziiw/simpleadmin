
import { ACTIONS } from 'Actions/orders'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_ORDERS:
      return action.payload.orders
    case ACTIONS.GET_ALL_ORDERS_FAILED:
      return {
        ...state,
        message: action.payload.message
      }
    default:
      return state
  }
}
