// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' // react-router v4

import styles from './styles.styl'

// -----------------------------
// Core

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Menu] - Mounted')
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.menu}>
        <ul>
          <li><Link to='/'>Overview</Link></li>
          <li><Link to='/orders'>Orders</Link></li>
          <li><Link to='/catalog'>Catalog</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

Menu.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
