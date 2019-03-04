// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './settings.styl'


// -----------------------------
// Core

class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // Component appear
    this.animEnter()
    console.log('[Settings] - Mounted')
  }

  componentWillUnmount () {
    // Before leaving
  }

  animEnter () {

  }

  render () {
    return (
      <div className={styles.settings}>
        <h2>Settings</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

Settings.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
