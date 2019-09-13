import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  GET_ALL_PRODUCTS_FAILED: 'GET_ALL_PRODUCTS_FAILED',
  CREATE_PRODUCTS: 'CREATE_PRODUCTS',
  CREATE_PRODUCTS_FAILED: 'CREATE_PRODUCTS_FAILED',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  UPDATE_PRODUCT_FAILED: 'UPDATE_PRODUCT_FAILED',
}

export const getAll = () => {
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

export const create = (products) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.SERVER.HOST}/api/products`, {products: products, token: localStorage.getItem('token')})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.CREATE_PRODUCTS
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.CREATE_PRODUCTS_FAILED,
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

export const update = (product) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.SERVER.HOST}/api/product/${product._id}`, {product: product, token: localStorage.getItem('token')})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.UPDATE_PRODUCT
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.UPDATE_PRODUCT_FAILED,
            payload: {message: data.message}
          })
          reject(data.message)
        }
      }).catch((error) => {
        console.error(error)
      })
    })
  }
}