// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllOrders } from 'Actions/orders'

import styles from './order.styl'

// -----------------------------
// Core

class Order extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ""
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    const id = this.props.location.pathname.split('/')[2]
    console.log(id)
    this.setState({id})
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.order}>
        <h2>Order number #{this.state.id}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

Order.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
