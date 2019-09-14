
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
import EntryCalendar from './components/EntryCalendar'
import SplineGraph from './components/SplineGraph'
import { events } from './events'
import { dataPoints } from './dataPoints'
import moment from 'moment'

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
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components" activeStyle={{fontSize: '20px'}}>Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
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
                        </Row>

                    </Container>

                </Jumbotron>


            </div>



        );
    }
}

export default App;
