// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4

import styles from './catalog.styl'

import { get } from 'Actions/catalogs'

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

    this.props.get()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    const name = this.props.catalogs.length ? this.props.catalogs[0].name : ""
    const products = this.props.catalogs.length ? this.props.catalogs[0].products : []
    return (
      <div className={styles.catalog}>
        <h2 className={styles.title}>Catalog: {name}</h2>
        <button>Add catalog</button>
        <Switch>
          <Route path='' exact component={() => <ProductsList products={products || []}/>} />
          <Route path='/add' component={AddProductForm} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  catalogs: state.catalogs
})

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(get())
})

Catalog.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
