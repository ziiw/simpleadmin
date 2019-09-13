// -----------------------------
// Imports

import React from 'react'
import { connect } from 'react-redux'

import { update } from 'Actions/customers'
import styles from './styles.styl'

// -----------------------------
// Core

class EditCustomer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      customer: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // if customers array as a length and before not,
    // filter the customers and grab the one we want to edit
    // console.log(nextProps.customers.length)
    if (nextProps.customers.length > 0 && !prevState.customer) {
      const id = nextProps.match.params.id
      return {
        ...prevState,
        customer: Object.assign({}, nextProps.customers.filter((c) => c._id === id)[0])
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
    console.log(this.state.customer)
    this.props.update(this.state.customer).catch(error => console.error(error))
  }

  handleInput (field, e) {
    const { customer } = this.state
    customer[field] = e.target.value

    this.setState({customer})
  }

  render () {
    const { customer } = this.state

    return (
      <div className={styles.editCustomer}>
        <h2>Edit</h2>
        {!customer && <p>Re-select your customer</p>}
        {customer && (
          <div className={styles.form}>
            <label>Firstname</label><input type='text' value={customer.firstname} onChange={this.handleInput.bind(this, 'firstname')} /><br />
            <label>Lastname</label><input type='text' value={product.lastname} onChange={this.handleInput.bind(this, 'lastname')} /><br />
            <label>Email</label><input type='text' value={product.email} onChange={this.handleInput.bind(this, 'email')} /><br />
            <p>{customer.orders.length} orders</p>
            <br />
            <button onClick={this.handleSave.bind(this)}>Save 👌</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customers: state.customers
})

const mapDispatchToProps = dispatch => ({
  update: (customer) => dispatch(update(customer))
})

EditCustomer.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer)
