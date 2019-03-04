// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
      <div className={styles.list}>
        {this.props.products.map((item) => {
          return <div key={item.name}>{item.name}</div>
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

ProductsList.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
