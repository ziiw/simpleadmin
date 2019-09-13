// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom' // react-router v4

import styles from './catalog.styl'

import { getAll } from 'Actions/products'

import ProductsList from 'Components/productsList/productsList'

import AddProduct from 'Layouts/addProduct/addProduct'
import EditProduct from 'Layouts/editProduct/editProduct'

// -----------------------------
// Core

class Catalog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Catalog] - Mounted')

    this.props.getAll()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    const products = this.props.products.length ? this.props.products : []

    return (
      <div className={styles.catalog}>
        <h2 className={styles.title}>Catalog</h2>
        {this.props.history.location.pathname === '/catalog' && <Link to='/catalog/add'>Add products</Link>}
        {this.props.history.location.pathname.indexOf('add') > -1 && <Link to='/catalog'>Back to products</Link>}
        {this.props.history.location.pathname.indexOf('edit') > -1  && <Link to='/catalog'>Back to products</Link>}
        <Switch>
          <Route path='/catalog/' exact component={() => <ProductsList products={products || []}/>} />
          <Route path='/catalog/add' exact component={AddProduct} />
          <Route path='/catalog/edit/:id' exact component={EditProduct} />
        </Switch>
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

Catalog.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
