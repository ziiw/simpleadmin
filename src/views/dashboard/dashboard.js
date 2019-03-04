// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4

import styles from './styles.styl'

import Menu from 'Components/menu/menu'
import Overview from 'Layouts/overview'
import Orders from 'Layouts/orders/orders'
import Order from 'Layouts/orders/order'
import Catalog from 'Layouts/catalog/catalog'
import Settings from 'Layouts/settings'

// -----------------------------
// Core

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Dashboard] - Mounted')
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.dashboard}>
        <h1>Welcome to your Dashboard</h1>
        <Menu />
        <Switch>
          <Route path='/' exact component={Overview} />
          <Route path='/orders/:id' component={Order} />
          <Route path='/orders' component={Orders} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

Dashboard.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
