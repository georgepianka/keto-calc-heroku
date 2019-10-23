import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { NavLink, withRouter } from 'react-router-dom'

const LogOut = ({ logout, history }) => {

  const handleClick = event => {
    event.preventDefault()
    window.FB.logout()
    logout(history);
    }


  return (

    <NavLink onClick={handleClick} className="btn btn-secondary btn-sm border border-muted text-light" exact to="#">Logout</NavLink>

  )
}


export default withRouter(connect(null, { logout } )(LogOut))
