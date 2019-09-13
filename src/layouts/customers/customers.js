// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import CustomersList from 'Components/customersList/customersList'
import EditCustomer from 'Layouts/customers/editCustomer/editCustomer'

import { getAll } from 'Actions/customers'
import styles from './styles.styl'

// -----------------------------
// Core

class Customers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // Component appear
    this.animEnter()

    this.props.getAll()
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.customers}>
        <h2>Customers</h2>
        <Switch>
          <Route path='/customers' exact component={() => <CustomersList customers={this.props.customers}/>} />
          <Route path='/customers/:id' exact component={EditCustomer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customers: state.customers
})

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAll())
})

Customers.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Customers)
