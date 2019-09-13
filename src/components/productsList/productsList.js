// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './styles.styl'

// -----------------------------
// Core

class ProductsList extends React.Component {
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
      <div className={styles.list}>

        {this.props.products.length > 0 && this.props.products.slice(0, 5).map((item) => {
          return (<div key={item._id} className={styles.product}>
            <div className={styles.productInfo}><img src={item.visuals[0]} /></div>
            <div className={styles.productInfo}>{item.reference}</div>
            <div className={styles.productInfo}>{item.name}</div>
            <div className={styles.productActions}>
              <Link to={`/catalog/edit/${item.reference}`}>Edit</Link>
              <p>Delete</p>
            </div>
          </div>)
        })}

        {
          this.props.products.length == 0 && <p>0 products to display</p>
        }
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

ProductsList.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
