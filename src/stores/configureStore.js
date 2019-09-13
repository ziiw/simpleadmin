import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import baseReducers from 'Reducers/'

export const history = createBrowserHistory()
const initialState = { user: {}, products: [], customers: []}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  baseReducers(history),
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)
