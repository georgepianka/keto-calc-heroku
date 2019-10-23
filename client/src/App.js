
import React, { Component } from 'react';
import {
    Input,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import FlipMove from "react-flip-move";
import EntryCalendar from './components/EntryCalendar'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import SplineGraph from './components/SplineGraph'
import SideBar from './components/SideBar'
import { events } from './events'
import { dataPoints } from './dataPoints'
import { getCurrentUser, facebookLogin } from './actions/currentUser';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import moment from 'moment'
import ketoCalc from './styles/ketocalc.jpg'
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    componentDidMount() {
      this.facebookAuthorization();
      this.props.getCurrentUser();
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    facebookAuthorization = () => {
      let self = this;
      let scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.src = process.env.REACT_APP_FACEBOOK_AUTH_PATH;
      scriptTag.addEventListener('load', e => {
        // This subscribe the callback when login status change
        // Full list of events is here
        // https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v2.9




        window.FB.Event.subscribe('auth.statusChange', self.onSuccess);
      });

      document.body.appendChild(scriptTag);

    }

    onSuccess = (response) => {
          if (response.status === 'connected') {
            console.log(response.authResponse)
            const { accessToken, userID } = response.authResponse;
            this.props.facebookLogin(accessToken, userID, this.props.history);
            console.log("Connected to Facebook");
          } else {
            window.FB.XFBML.parse();
            //This function parses and renders XFBML markup in a document on the fly.
            //Reloads Button When window.FB.logout(); in Logout Component is called.
            console.log("Not Connected to Facebook")
          }
        }





    render() {

      const { loggedIn } = this.props
        return (
          <div className="bg">
            <div className="App">
                { loggedIn ? <NavBar isOpen={this.state.isOpen} toggle={this.toggle}/> : <Welcome/> }


                        { loggedIn ?
                          <Container><Row><Col>
                            < EntryCalendar events = {events} />
                            < SplineGraph dataPoints = {dataPoints} />
                          </Col></Row></Container> : null  }

                          </div>


                          {/*
                          <Input
                            id="dob"
                            type="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            //onBlur={handleBlur}
                            className="form-control mt-2"
                          />
                          < SideBar />
                          */}

                          <Switch>
                          </Switch>
                        </div>











        );
    }
}


const mapStateToProps = (state) => {

  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStateToProps,{ getCurrentUser, facebookLogin })(App));
