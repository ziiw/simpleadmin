import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  GET_ALL_PRODUCTS_FAILED: 'GET_ALL_PRODUCTS_FAILED',
}

export const getAllProducts = () => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.get(`${Constants.SERVER.HOST}/api/products`)
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.GET_ALL_PRODUCTS,
            payload: {products: data.products}
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.GET_ALL_PRODUCTS_FAILED,
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