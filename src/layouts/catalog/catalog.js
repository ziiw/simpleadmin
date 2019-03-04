// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4

import styles from './catalog.styl'

import { getAllProducts } from 'Actions/catalog'

import ProductsList from 'Components/productsList/productsList'
import AddProductForm from 'Components/addProductForm/addProductForm'

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

    this.props.getAllProducts()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.catalog}>
        <h2>Catalog</h2>
        <Switch>
          <Route path='' exact component={() => <ProductsList products={this.props.catalog.products || []}/>} />
          <Route path='/add' component={AddProductForm} />
          {/* <ProductsList products={this.props.catalog.products || []}/> */}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  catalog: state.catalog
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

Catalog.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
