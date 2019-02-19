// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.styl'

import { remove, increase, decrease } from 'Actions/cart'

// -----------------------------
// Core

class Cart extends React.Component {
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
      <div className={styles.cart}>
        Cart
        <ul>
          {this.props.cart.products.map((p) => {
            return <li key={p.id}>{p.name} - {p.quantity} <span onClick={() => this.props.remove(p)}>x</span> | <span onClick={() => this.props.increase(p)}>+</span> | <span onClick={() => this.props.decrease(p)}>-</span></li>
          })}
        </ul>
        
        {this.props.cart.products.length > 0 && <button>Proceed to checkout</button>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  remove: (p) => dispatch(remove(p)),
  increase: (p) => dispatch(increase(p)),
  decrease: (p) => dispatch(decrease(p)),
})

Cart.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
