import React from 'react'
import { Link } from 'react-router-dom'
import { saveToLocalStorage } from './util'

export class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      valid: false,
      errorMessage: ''
    }
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  onChangeConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  setError = (isError, errorMessage) => {
    if(isError) {
      this.setState({
        error: isError,
        errorMessage
      })
    }
  }

  validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`']/
    this.setError(emailRegex.test(this.state.email), 'invalid email')
  }

  validatePassword = () => {
    this.setError(!this.state.password, 'invalid password')
  }

  validateConfirmPassword = () => {
    this.setError(this.state.password !== this.state.confirmPassword, 'password doesn\'t match')
  }

  validateFirstName = () => {
    this.setError(!this.state.firstName, 'firstname cannot be empty')
  }

  validateLastName = () => {
    this.setError(!this.state.lastName, 'lastname cannot be empty')
  }

  validateAll = () => {
    this.validateEmail()
    this.validatePassword()
    this.validateConfirmPassword()
    this.validateFirstName()
    this.validateLastName()
  }

  handleLoginClik = () => {
    this.validateAll()
    if(!this.error && !this.errorMessage) {
      saveToLocalStorage(this.state)
    }
  }

  render() {
    return(
      <div>
        <Link to="/login">login</Link>
        <div>
          email: <input type="text" onChange={this.onChangeEmail}/>
        </div>
        <div>
          password: <input type="text" onChange={this.onChangePassword}/>
        </div>
        <div>
          confirm password: <input type="text" onChange={this.onChangeConfirmPassword}/>
        </div>
        <div>
          firstName: <input type="text" onChange={this.onChangeFirstName}/>
        </div>
        <div>
          lastName: <input type="text" onChange={this.onChangeLastName}/>
        </div>
        <div>
          <button onClick={this.handleLoginClik}>Signup</button>
        </div>
      </div>
    )
  }
}
