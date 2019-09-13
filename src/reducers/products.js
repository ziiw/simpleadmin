import { ACTIONS } from 'Actions/products'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_PRODUCTS:
      return action.payload.products
    case ACTIONS.GET_ALL_PRODUCTS_FAILED:
        return action.payload.message
    default:
      return state
  }
}
