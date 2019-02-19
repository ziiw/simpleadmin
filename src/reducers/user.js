import { ACTIONS } from 'Actions/user'

export default (state = {
  token: ""
}, action) => {
  switch (action.type) {
    // TODO: Try to rewrite this in a better way
    case ACTIONS.LOGIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token
      }
    case ACTIONS.LOGIN_FAILED:
      return {
        ...state,
        message: action.payload.message
      }
    default:
      return state
  }
}
