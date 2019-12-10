import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Badge } from 'reactstrap';


export default class Favoriting extends Component {

    state = {
        favorites: 0
      }

    incrementFavorites = ()=> {
      this.setState({favorites: this.state.favorites+1});


    }

    render() {

      return(

        <div>
        <Button onClick={this.incrementFavorites} className="btn-lg" color="success">Favorite</Button>

        <Badge pill>{this.state.favorites}</Badge>
        </div>

      )


    }

  }
