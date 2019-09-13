// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

import { getAllOrders } from 'Actions/orders'

import ProductsList from 'Components/productsList/productsList'

import styles from './order.styl'

// -----------------------------
// Core

class Order extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      order: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // if orders array as a length and before not,
    // filter the orders and grab the one we want to edit
    // console.log(nextProps.orders.length)
    if (nextProps.orders.length > 0 && !prevState.order) {
      const id = nextProps.match.params.id
      return {
        ...prevState,
        order: nextProps.orders.filter((p) => p._id === id)[0]
      }
    } else {
      return prevState
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()    
  }

  componentWillUnmount () {
    // Before leaving
  }

  calculatePriceCart () {
    return this.state.order.products.reduce((acc, p) => acc += p.price, 0)
  }

  animEnter () {

  }

  render () {
    const { order } = this.state
    return (
      <div className={styles.order}>
        {order && (
          <React.Fragment>
            <div className={styles.header}>
              <p className={styles.backLink}><Link to='/orders'>Return to orders</Link></p>
              <h2 className={styles.title}>Order number #{order._id}</h2>
            </div>
            <h2>Order details</h2>
            <div className={styles.content}>
              <div className={styles.infosOrder}>
                <p>Status: <b>{order.status}</b></p>
                <p>Payment ref: 23324324324</p>
                <p>Order date: {new Date(order.created_at).toLocaleDateString()}</p>
                <p>Number of products: {order.products.length}</p>
                <p>Total: {this.calculatePriceCart()} €</p>
              </div>
              <div className={styles.infosClient}>
                <p>Customer: <b>{order.customer.firstname} {order.customer.lastname}</b></p>
                <p>Email: <b>{order.customer.email}</b></p>
                <p>Customer since: {new Date(order.customer.created_at).toLocaleDateString()}</p>
                <label htmlFor='notes'>Notes</label>
                <textarea name='notes' width='200' height='300'>
                </textarea>
              </div>
            </div>
            <div className={styles.productList}>
              <h2>Products list</h2>
              <ProductsList products={order.products} />
            </div>
            <div className={styles.actions}>
              <button>Re-send confirmation email</button>
              <select defaultValue='Waiting to be shipped (payment done)'>
                <option>Waiting payment (payment issue)</option>
                <option>Waiting to be shipped (payment done)</option>
                <option>Ready for shipping (packaging done)</option>
                <option>Shipped (order complete)</option>
                <option>Completed (received by the client)</option>
              </select>
              <button>Hide order</button>
            </div>
          </React.Fragment>
        )}
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
