// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './overview.styl'

// -----------------------------
// Core

class Overview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Overview] - Mounted')
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.overview}>
        <h2>Overview</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

Overview.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
