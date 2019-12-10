import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Badge } from 'reactstrap';


export default class Liking extends Component {

    state = {
        likes: 0
      }

    incrementLikes = ()=> {
      this.setState({likes: this.state.likes+1});


    }

    render() {

      return(

        <Button className="btn-md mb-3 ml-2" outline onClick={this.incrementLikes}  color="info">Like <Badge color="secondary" className=" ml-1">{this.state.likes}</Badge></Button>



      )


    }

  }
