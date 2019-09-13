// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

import styles from './styles.styl'

// -----------------------------
// Core

class OrdersList extends React.Component {
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
      <div className={styles.list}>
        {this.props.orders.map((item, index) => {
          return <div key={item._id} className={styles.order}>
            <div className={styles.details}>
              <p>{index}</p>
            </div>
            <div className={styles.details}>
              <p>{item._id}</p>
            </div>
            <div className={styles.details}>
              <p>{new Date(item.date).toLocaleString()}</p>
            </div>
            <div className={styles.details}>
              <p>{item.cart.length} items</p>
            </div>
            <div className={styles.details}>
              <p>{item.discount === '' ? '∅' : item.discount}</p>
            </div>
            <div className={styles.details}>
              <p>Waiting to be shipped</p>
            </div>
            <div className={styles.details}>
              <Link to={`/orders/${item._id}`}>Details</Link>
            </div>
          </div>
        })}
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

OrdersList.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)
