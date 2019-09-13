// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'

import { create } from 'Actions/products'
import styles from './styles.styl'

// -----------------------------
// Core

class AddProductForm extends React.Component {
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

  handleImport () {
    console.log('Import single')
  }

  render () {
    return (
      <div className={styles.addProductForm}>
        <h1>Add product</h1>
        <form>
          <input type='text' placeholder='Reference'/> <br/>
          <input type='text' placeholder='Name'/>
          <textarea defaultValue='Description'></textarea>
          <textarea defaultValue='Meta'></textarea>
          <input type='text' placeholder='Price'/>
          <input type='text' placeholder='PriceHT'/>
          <input type='text' placeholder='Visuals'/>
          <select>
            <option>Category</option>
          </select>
          <input type='number' placeholder='Quantity'/>
        </form>
        <button onClick={this.handleImport.bind(this)}>Add product</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  create: (products) => dispatch(create(products))
})

AddProductForm.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
