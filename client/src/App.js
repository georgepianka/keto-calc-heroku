
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
    Button,
    Tooltip
} from 'reactstrap';
import EntryCalendar from './components/EntryCalendar'
import SplineGraph from './components/SplineGraph'
import SideBar from './components/SideBar'
import { events } from './events'
import { dataPoints } from './dataPoints'
import moment from 'moment'
import ketoCalc from './styles/ketocalc.jpg'
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            date: moment().toDate()
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = e => {
  this.setState({
    date: e.target.value})
}
    render() {
        return (
          <div className="bg">
            <div className="App">
                <Navbar style={{backgroundColor:"#62DDBD"}} light expand="md">
                    <NavbarBrand style={{color:"royalblue"}} href="/">

                    <img src={ketoCalc} className="Welcome" alt="KetoCalc" style={{width: 50, height: 50, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
                    KetoCalc
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="btn btn-primary btn-sm border border-muted text-light" href="/" activeStyle={{fontSize: '20px'}}>Log Day</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="btn btn-info btn-sm border border-muted text-light" href="/" activeStyle={{fontSize: '20px'}}>View Graph</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="btn btn-secondary btn-sm border border-muted" href="https://github.com/reactstrap/reactstrap">Sign Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron style={{backgroundColor: "transparent"}}>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>

                        < EntryCalendar events = {events} />
                        < SplineGraph dataPoints = {dataPoints} />
                        </Col>
                        </Row>
                        <Row>
                        <Input
                          id="dob"
                          type="date"
                          value={this.state.date}
                          onChange={this.handleChange}
                          //onBlur={handleBlur}
                          className="form-control mt-2"
                        />
                        < SideBar />
                        </Row>

                    </Container>

                </Jumbotron>


            </div>
          </div>



        );
    }
}

export default App;
