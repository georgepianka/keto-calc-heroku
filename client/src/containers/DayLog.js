import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ketoCalc from '../styles/ketocalc.jpg';
import DateForm from '../components/DateForm';
import DayEdit from '../components/DayEdit';
import { createDay } from '../actions/currentDay';
import moment from 'moment';

class DayLog extends Component {

    state = {
        startDate: new Date(),
        foods: [],
        searchValue: ''
      }

    setStartDate = (date)=> {
      this.setState({ startDate: date });
      console.log(moment(date).format("YYYY-MM-DD"));
      this.props.createDay(moment(date).format("YYYY-MM-DD"), this.props.history);


    }

    render() {

      return(
        <div className="info p-4">
        <h1 className="display-5 font-weight-bold">Keto Calc</h1>
        <img src={ketoCalc} className="d-block mx-auto my-3" alt="KetoCalc" style={{width: 100, height: 100, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
        <h4 className="mb-5 font-weight-light">Keeping You In Ketosis</h4>
        <h2 className="display-5 font-weight-bold"> LOG </h2>


        <Switch>

          <Route exact path='/log/days/new' render={props => {
            return <DateForm setStartDate={this.setStartDate} startDate={this.state.startDate} userDates={this.props.userDates} {...props}/>
          }}/>

          <Route exact path='/log/days/:id/edit' render={props => {
            return <DayEdit dayEditForm={this.props.dayEditForm} currentDay={this.props.currentDay} {...props}/>
            }
          }/>
        </Switch>


          <table>
          </table>

        </div>

      )




    }

}

export default withRouter(connect(state => ({currentDay: state.currentDay, dayEditForm: state.dayForm}), { createDay })(DayLog));
