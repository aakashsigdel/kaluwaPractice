import React from 'react'
import { Link  } from 'react-router-dom'

export class Welcome extends React.Component {
  render() {
    const name = this.props.location.state
    return (
      <div>
        <Link to="/login">login</Link>
        <br />
        <Link to="/signup">sign up</Link>
        <div>{'hello ' + name + '! Welcome'}</div>
      </div>
    )
  }
}
