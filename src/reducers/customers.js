import { ACTIONS } from 'Actions/customers'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_CUSTOMERS:
      return [
       ...action.payload.customers
      ]
    default:
      return state
  }
}
