// -----------------------------
// Imports

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from 'Actions/user'
import styles from './styles.styl'

// -----------------------------
// Core

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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

  handleLogin () {
    // Start loading anim
    const isRemember = this.refs.remember.checked
    this.props.login(this.refs.username.value, this.refs.password.value)
      .then((token) => {
        if (isRemember) localStorage.setItem('token', token);
        this.props.history.push('/')
      }).catch(() => {
        console.log('error')
      })
  }

  render () {
    return (
      <div className={styles.login}>
        <h1>Login</h1>
        <input type='text' ref='username' />
        <input type='password' ref='password' />
        <button onClick={this.handleLogin.bind(this)}>Login</button>
        <input type='checkbox' name='remember' ref='remember'/><label htmlFor='remember'>Remember me</label>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

Login.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
