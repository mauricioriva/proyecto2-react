import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar narvbar-dark dg-dark">
        <div>
          <h1 className="text-white"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;{this.props.title}</h1>
        </div>
      </nav>
    );
  }
}

export default Navigation;
