import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  GET_ALL_ORDERS: 'GET_ALL_ORDERS',
  GET_ALL_ORDERS_FAILED: 'GET_ALL_ORDERS_FAILED',
  GET_ORDER: 'GET_ORDER',
  GET_ORDER_FAILED: 'GET_ORDER_FAILED'
}

export const getAllOrders = () => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.get(`${Constants.SERVER.HOST}/api/orders`, 
        {headers: {'x-access-token': localStorage.getItem('token')}})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.GET_ALL_ORDERS,
            payload: {orders: data.orders}
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.GET_ALL_ORDERS_FAILED,
            payload: {message: data.message}
          })
          reject()
        }
      }).catch((error) => {
        console.error(error)
      })
    })
  }
}

// export const getOrder = (id) => {
//   return dispatch => {
//     return new Promise ((resolve, reject) => {
//       Axios.get(`${Constants.SERVER.HOST}/api/order/${id}`, 
//         {headers: {'x-access-token': localStorage.getItem('token')}})
//       .then(({data}) => {
//         if (data.success) {
//           dispatch({
//             type: ACTIONS.GET_ORDER,
//             payload: {order: data.order}
//           })
//           resolve()
//         } else {
//           dispatch({
//             type: ACTIONS.GET_ORDER_FAILED,
//             payload: {message: data.message}
//           })
//           reject()
//         }
//       }).catch((error) => {
//         console.error(error)
//       })
//     })
//   }
// }