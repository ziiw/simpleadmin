import { ACTIONS } from 'Actions/catalogs'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.CREATE_CATALOG:
      return [
        ...state,
        action.payload.catalog
      ]
    case ACTIONS.CREATE_CATALOG_FAILED:
      return action.payload.message
    case ACTIONS.GET_CATALOGS:
      return action.payload.catalogs
    case ACTIONS.GET_CATALOGS_FAILED:
      return action.payload.message
    default:
      return state
  }
}
