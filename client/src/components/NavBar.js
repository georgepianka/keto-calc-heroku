import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
//import Logout from './Logout'
import ketoCalc from '../styles/ketocalc.jpg'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse
} from 'reactstrap';

const NavBar = ({ currentUser, loggedIn, toggle, isOpen }) => {

  return (

    <Navbar style={{backgroundColor:"#62DDBD"}} light expand="md">
        <NavbarBrand style={{color:"royalblue"}} href="/">

        <img src={ketoCalc} className="Welcome" alt="KetoCalc" style={{width: 50, height: 50, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
        KetoCalc
        </NavbarBrand>
        <NavItem>
        { loggedIn ? <h5> Welcome, {currentUser.attributes.username}! </h5> : null}
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="btn btn-primary btn-sm border border-muted text-light" to="/days/new" activeStyle={{fontSize: '20px'}}>Log Day</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-info btn-sm border border-muted text-light" to="/graph" activeStyle={{fontSize: '20px'}}>View Graph</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-secondary btn-sm border border-muted"> {/*{ loggedIn ? <Logout/>: null}*/} Sign Out</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
