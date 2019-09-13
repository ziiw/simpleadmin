// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'

import { getAll } from 'Actions/products'

import AddProductForm from 'Components/addProductForm/addProductForm'
import AddProductBatch from 'Components/addProductBatch/addProductBatch'

// -----------------------------
// Core

class AddProduct extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
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
        <AddProductForm />
        <AddProductBatch />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAll())
})

AddProduct.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
