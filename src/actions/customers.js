import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  GET_ALL_CUSTOMERS: 'GET_ALL_CUSTOMERS',
  GET_ALL_CUSTOMERS_FAILED: 'GET_ALL_CUSTOMERS_FAILED',
  CREATE_CUSTOMER: 'CREATE_CUSTOMER',
  CREATE_CUSTOMER_FAILED: 'CREATE_CUSTOMER_FAILED',
  UPDATE_CUSTOMER: 'UPDATE_CUSTOMER',
  UPDATE_CUSTOMER_FAILED: 'UPDATE_CUSTOMER_FAILED',
}

export const getAll = () => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.get(`${Constants.SERVER.HOST}/api/customers`, 
      {headers: {'x-access-token': localStorage.getItem('token')}})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.GET_ALL_CUSTOMERS,
            payload: {customers: data.customers}
          })
          resolve()
        } else {
          console.log("sdfdsf")
          dispatch({
            type: ACTIONS.GET_ALL_CUSTOMERS_FAILED,
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

export const create = (customer) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.SERVER.HOST}/api/customers`, {customer, token: localStorage.getItem('token')})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.CREATE_CUSTOMER
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.CREATE_CUSTOMER_FAILED,
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

export const update = (customer) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.SERVER.HOST}/api/customer/${customer._id}`, {customer, token: localStorage.getItem('token')})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.UPDATE_CUSTOMER
          })
          resolve()
        } else {
          dispatch({
            type: ACTIONS.UPDATE_CUSTOMER_FAILED,
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