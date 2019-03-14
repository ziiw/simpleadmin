import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  GET_ALL_PRODUCTS_FAILED: 'GET_ALL_PRODUCTS_FAILED',
  CREATE_CATALOG: 'CREATE_CATALOG',
  CREATE_CATALOG_FAILED: 'CREATE_CATALOG_FAILED',
  GET_CATALOGS: 'GET_CATALOGS',
  GET_CATALOGS_FAILED: 'GET_CATALOGS_FAILED'
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

// WIP: CRUD Catalog
export const create = () => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.SERVER.HOST}/api/catalogs`, {token: localStorage.get('token')})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.CREATE_CATALOG,
            payload: {catalog: data.catalog}
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.CREATE_CATALOG_FAILED,
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

export const get = () => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      Axios.get(`${Constants.SERVER.HOST}/api/catalogs`, {headers: {'x-access-token': localStorage.getItem('token')}})
      .then(({data}) => {
        if (data.success) {
          console.log(data)
          dispatch({
            type: ACTIONS.GET_CATALOGS,
            payload: {catalogs: data.catalogs}
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.GET_CATALOGS_FAILED,
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