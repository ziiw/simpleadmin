import { ACTIONS } from 'Actions/catalog'

export default (state = {
  products: []
}, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      }
    case ACTIONS.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        message: action.payload.message
      }
    default:
      return state
  }
}
