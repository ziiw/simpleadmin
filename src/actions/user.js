import Axios from "axios"
import Constants from 'Helpers/Constants'

export const ACTIONS = {
  LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
  LOGIN_FAILED: 'LOGIN_FAILED'
}

export const login = (username, password) => {
  return dispatch => {
    return new Promise ((resolve, reject) => {
      // Call auth provider
      // SimpleAuth in our case
      Axios.post(`${Constants.AUTH.HOST}/api/login`, {username, password})
      .then(({data}) => {
        if (data.success) {
          dispatch({
            type: ACTIONS.LOGIN_SUCCESSFUL,
            payload: {token: data.token}
          })
          resolve(data.token)
        } else {
          dispatch({
            type: ACTIONS.LOGIN_FAILED,
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