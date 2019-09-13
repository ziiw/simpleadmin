// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './styles.styl'

// -----------------------------
// Core

class ProductsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.customersList}>
        {this.props.customers.length && this.props.customers.slice(0, 5).map((customer) => {
          return (<div key={customer._id} className={styles.customer}>
            <div className={styles.customerInfo}>{customer.email}</div>
            <div className={styles.customerInfo}>{customer.firstname} {customer.lastname}</div>
            <div className={styles.customerInfo}>{customer.orders.length} orders</div>
            <div className={styles.customerActions}>
              <Link to={`/customers/edit/${customer._id}`}>Edit</Link>
            </div>
          </div>)
        })}
        {this.props.customers.length == 0 && <p>0 customers to display</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // products: state.products
})

const mapDispatchToProps = dispatch => ({
  // increment: () => dispatch(increment()),
})

ProductsList.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
