import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DayForm from '../components/DayForm'

class DayLog extends React.Component {

    state = {
        foods: [],
        searchValue: '',
      }

    render() {

      return(
        <div>


        <Switch>

          <Route exact path='/log/days/new' render={props => {
            return <DayForm userDates={this.props.userDates} {...props}/>
          }}/>

        </Switch>


          <table>
          </table>

        </div>

      )




    }

}
export default DayLog;
