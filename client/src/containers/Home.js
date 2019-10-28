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
import DateSelect from '../components/DateSelect'
import UserForm from '../components/UserForm'
import Graph from '../components/Graph'
import SideBar from '../components/SideBar'
import { events } from '../events'
import { dataPoints } from '../dataPoints'
import { getCurrentUser, facebookLogin, login, signup } from '../actions/currentUser';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
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

    componentDidUpdate() {
      if (!this.props.loggedIn) {
        window.FB.XFBML.parse()
        //This function parses and renders XFBML markup in a document on the fly.
        //Reloads Button When window.FB.logout(); in Logout Component is called.
      }
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
      const { loggedIn, currentUser, userDays, calendarDays, graphDays  } = this.props;
        return (
          <div>
                { loggedIn ? <NavBar currentUser={currentUser} loggedIn={loggedIn} isOpen={this.state.isOpen} toggle={this.toggle}/> : null }




                          <Switch>
                          <Route exact path='/'>
                            {loggedIn ? <Redirect to='/calendar/days'/> : < Welcome />}

                          </Route>

                          { loggedIn ?
                            <>
                            <Route exact path='/days/new' render={props => {
                              const userDates = userDays.map(day => day.attributes.date)
                              return <DateSelect userDates={userDates} {...props}/>
                            }}/>
                            <Route exact path='/calendar/days' render={props => (
                              <EntryCalendar calendarDays = {calendarDays} {...props}/>
                            )}/>
                            <Route exact path='/graph/days' render={props => (
                              <Graph graphDays = {graphDays} {...props}/>
                            )}/>

                            </>
                            :
                            <>

                            <Route exact path='/welcome' component={Welcome}/>
                            <Route exact path='/login' render={props => (
                              <UserForm isSignup={false} userFormSubmit= {this.props.login} {...props}/>
                            )}/>
                            <Route exact path='/signup' render={props => (
                              <UserForm isSignup={true} userFormSubmit= {this.props.signup} {...props}/>
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

export default withRouter(connect(state => ({currentUser: state.currentUser, loggedIn: !!state.currentUser, userDays: state.userDays, calendarDays: state.calendarDays, graphDays: state.graphDays}), { getCurrentUser, facebookLogin, login, signup })(Home));
