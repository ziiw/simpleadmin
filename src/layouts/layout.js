// -----------------------------
// Imports

import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from 'Stores/configureStore'

// -----------------------------
// Views

import Login from 'Views/login/login'
import Dashboard from 'Views/dashboard/dashboard'

// -----------------------------
// Core

export default class Layout extends React.Component {
  componentDidMount () {
    // Component appear
    console.info('[Layout] - starting')
  }

  render () {
    return (
      <div id='layout'>
        <div id='wrapperPage' >
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <PrivateRoute path='/' exact component={Dashboard} />
                <Route path='/login' component={Login} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </div>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().user.token || localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
