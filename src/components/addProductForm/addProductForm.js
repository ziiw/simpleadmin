// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.styl'

// -----------------------------
// Core

class AddProductForm extends React.Component {
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
      <div>
        <p>Add Product</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  
})

AddProductForm.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
