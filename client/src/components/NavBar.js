import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut'
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

    <Navbar className="mb-5" style={{backgroundColor:"rgba(98, 221, 189, .8)"}} light expand="md">
        <NavbarBrand>
        <NavLink style={{textDecoration: "none" }} exact to="/">
        <img src={ketoCalc} className="Welcome" alt="KetoCalc" style={{width: 50, height: 50, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
        KetoCalc
        </NavLink>
        </NavbarBrand>

        { loggedIn ? <NavItem className="btn btn-lg btn-outline-dark"> Welcome, {currentUser.attributes.username}! </NavItem> : null}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="btn btn-success btn-sm border border-muted text-light" exact to="/days/new" activeStyle={{fontSize: '25px'}}>Log</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-primary btn-sm border border-muted text-light" exact to="/calendar/days" activeStyle={{fontSize: '25px'}}>Calendar</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-info btn-sm border border-muted text-light" exact to="/graph/days" activeStyle={{fontSize: '25px'}}>Graph</NavLink>
                </NavItem>
                <NavItem>
                  < LogOut />
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>

  )
}

export default NavBar;
