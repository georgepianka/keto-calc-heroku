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
import EntryCalendar from '../components/EntryCalendar'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import UserForm from '../components/UserForm'
import SplineGraph from '../components/SplineGraph'
import SideBar from '../components/SideBar'
import { events } from '../events'
import { dataPoints } from '../dataPoints'
import { getCurrentUser, facebookLogin, login, signup } from '../actions/currentUser';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import moment from 'moment'
import ketoCalc from '../styles/ketocalc.jpg'


class Home extends Component {
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
            console.log("Not Connected to Facebook")
          }
        }





    render() {
      const { loggedIn, currentUser  } = this.props;
        return (
          <div>
                { loggedIn ? <NavBar currentUser={currentUser} loggedIn={loggedIn} isOpen={this.state.isOpen} toggle={this.toggle}/> : null }




                          <Switch>

                          { loggedIn ?
                            <>
                            <Route exact path='/' render={props => (
                              <EntryCalendar events = {events} {...props}/>
                            )}/>
                            <Route exact path='/graph' render={props => (
                              <SplineGraph dataPoints = {dataPoints} {...props}/>
                            )}/>
                            </>
                            :
                            <>
                            <Route exact path='/' component={Welcome}/>
                            <Route exact path='/login' render={props => (
                              <UserForm isSignup={false} userFormSubmit= {this.props.login} {...props}/>
                            )}/>
                            </>
                          }


                          </Switch>








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


                        </div>

        );
    }
}


/*
const mapStateToProps = (state) => {

  return ({
    loggedIn: !!state.currentUser,
  })
}
*/

export default withRouter(connect(state => ({currentUser: state.currentUser, loggedIn: !!state.currentUser}), { getCurrentUser, facebookLogin, login, signup })(Home));
