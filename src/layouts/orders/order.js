// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

import { getAllOrders } from 'Actions/orders'

import styles from './order.styl'

// -----------------------------
// Core

class Order extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      order: null
    }

    this.filterById = this.filterById.bind(this)
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    
    // If we go directly to this page
    // The props.orders will be empty
    // So we populate and filter
    if (this.props.orders.length == 0) {
      this.props.getAllOrders()
        .then(this.filterById)
    } else {
      this.filterById()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Update only when the state is final
    // Do not update when we receive new props
    // We need to filter them before
    // So no need to render at this moment
    return nextState.order ? true : false
  }

  filterById () {
    const id = this.props.location.pathname.split('/')[2]
    const order = this.props.orders.filter(order => order._id === id)[0]
    this.setState({order})
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    const { order } = this.state
    return (
      <div className={styles.order}>
        <div className={styles.header}>
          <p className={styles.backLink}><Link to='/orders'>Return to orders</Link></p>
          <h2 className={styles.title}>Order number #{order && order._id}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.infosOrder}>
            <p>Status: <b>Waiting to be shipped</b></p>
            <p>Payment ref: 23324324324</p>
            <p>Order date: {order && new Date(order.date).toISOString()}</p>
            <p>Items: {order && order.cart.length}</p>
            <p>Price: {order && order.cart.length} €</p>
          </div>
          <div className={styles.infosClient}>
            <p>Jean Jacques</p>
            <p>jj@protonmail.com</p>
            <p>Member from Sept 2008</p>
            <label for='notes'>Notes</label>
            <textarea name='notes' width='200' height='300'>
                Contacted on 23/04/2019 for payment issue
            </textarea>
          </div>
        </div>
        <div className={styles.actions}>
          <button>Contact</button>
          <button>Re-send confirmation email</button>
          <button>Delete order</button>
          <select>
            <option>Waiting payment (payment issue)</option>
            <option selected>Waiting to be shipped (payment done)</option>
            <option>Ready for shipping (packaging done)</option>
            <option>Shipped (order complete)</option>
            <option>Completed (received by the client)</option>
          </select>
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

Order.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
