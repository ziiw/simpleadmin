// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'

import { getAll, update } from 'Actions/products'
import styles from './styles.styl'

// -----------------------------
// Core

class EditProduct extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      product: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // if products array as a length and before not,
    // filter the products and grab the one we want to edit
    // console.log(nextProps.products.length)
    if (nextProps.products.length > 0 && !prevState.product) {
      const ref = nextProps.match.params.id
      return {
        ...prevState,
        product: Object.assign({}, nextProps.products.filter((p) => p.reference === ref)[0])
      }
    } else {
      return prevState
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

  handleSave () {
    console.log(this.state.product)
    this.props.update(this.state.product).catch(error => console.error(error))
  }

  handleInput (field, e) {
    const { product } = this.state
    if (field === 'visuals') {
      product[field] = e.target.value.split(',')
    } else {
      product[field] = e.target.value
    }

    this.setState({product})
  }

  render () {
    const { product } = this.state

    return (
      <div className={styles.editProduct}>
        <h2>Edit</h2>
        {!product && <p>Re-select your product</p>}
        {product && (
          <div className={styles.form}>
            <label>Reference</label><input type='text' value={product.reference} onChange={this.handleInput.bind(this, 'reference')} /><br />
            <label>Name</label><input type='text' value={product.name} onChange={this.handleInput.bind(this, 'name')} /><br />
            <label>Description</label><input type='text' value={product.description} onChange={this.handleInput.bind(this, 'description')} /><br />
            <label>Category</label><input type='text' value={product.category} onChange={this.handleInput.bind(this, 'category')} /><br />
            <label>Price HT</label><input type='text' value={product.priceHT} onChange={this.handleInput.bind(this, 'priceHT')} /><br />
            <label>Price</label><input type='text' value={product.price} onChange={this.handleInput.bind(this, 'price')} /><br />
            <label>Quantity</label><input type='text' value={product.quantity} onChange={this.handleInput.bind(this, 'quantity')} /><br />
            <label>isVsible</label><input type='text' value={product.isVisible} onChange={this.handleInput.bind(this, 'isVisible')} /><br />
            <label>Visuals</label><input type='text' value={product.visuals} onChange={this.handleInput.bind(this, 'visuals')} /><br />
            {product.visuals.map((imgSrc) => {
              return <img src={imgSrc} key={imgSrc} />
            })}
            <br />
            <button onClick={this.handleSave.bind(this)}>Save 👌</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAll()),
  update: (product) => dispatch(update(product))
})

EditProduct.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
