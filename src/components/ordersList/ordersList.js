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
        {this.props.orders.map((item) => {
          return <div key={item._id}><Link to={`/orders/${item._id}`}>{item._id}</Link></div>
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
