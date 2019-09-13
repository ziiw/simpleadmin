// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllOrders } from 'Actions/orders'

import styles from './orders.styl'

import OrdersList from 'Components/ordersList/ordersList'

// -----------------------------
// Core

class Orders extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Orders] - Mounted')
    if (this.props.orders.length === 0) {
      this.props.getAllOrders()
    }
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.orders}>
        <h2>Orders</h2>
        <div className={styles.content}>
          <OrdersList orders={this.props.orders}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => ({
  getAllOrders: () => dispatch(getAllOrders())
})

Orders.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
