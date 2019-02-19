// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { add } from 'Actions/cart'

import styles from './styles.styl'

// -----------------------------
// Core

class Item extends React.Component {
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
      <div className={styles.item}>
        {this.props.product.name}
        <button onClick={() => this.props.add(this.props.product, 1)}>Add to cart</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // products: state.products
})

const mapDispatchToProps = dispatch => ({
  add: (p, q) => dispatch(add(p, q))
})

Item.propTypes = {
  product: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
