// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.styl'

import Item from './item'

// -----------------------------
// Core

class Catalog extends React.Component {
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
      <div className={styles.catalog}>
        {this.props.products.map((p) => {
          return <Item key={p.id} product={p} />
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

Catalog.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
