import React from 'react'
import { Link } from 'react-router-dom'
import { getStateFromLocalStorage } from './util'

export class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
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

  checkLogin = () => {
    const data = getStateFromLocalStorage()
    const user = data.filter(item =>
      item.email === this.state.email && item.password === this.state.password)
    if(user) {
      return user[0]
    }

    return null
  }

  handleLoginClik = () => {
    const user = this.checkLogin()
    if(user) {
      this.setState({
        error: ''
      })
      this.props.history.replace('/welcome', user.firstName)
    } else {
      this.setState({
        error: 'invalid username or password'
      })
    }
  }

  render() {
    return(
      <div>
        <Link to="/signup">sign up</Link>
        <div>
          email: <input type="text" onChange={this.onChangeEmail}/>
        </div>
        <div>
          password: <input type="text" onChange={this.onChangePassword}/>
        </div>
        <div>
          <button onClick={this.handleLoginClik}>Login</button>
        </div>
        {this.state.error ? <div>{this.state.error}</div> : null}
      </div>
    )
  }
}
