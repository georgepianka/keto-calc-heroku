import React from 'react'
import { connect } from 'react-redux'
import { dayForm } from '../actions/dayForm';
import { updateDayEditForm } from '../actions/dayForm';
import { updateDay } from '../actions/currentDay';
import { Button, Card, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import ketoCalc from '../styles/ketocalc.jpg';
import Liking from './Liking';





const DayEdit = ( {currentDay, dayEditFormData, updateDayEditForm, updateDay, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const dayFormData = {
      ...dayEditFormData,
      [name]: value
        }
    updateDayEditForm(dayFormData)
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateDay(dayEditFormData, currentDay.data.id, history)
  }


  return (
    <div>
      <Form className="mb-3" onSubmit={handleSubmit}>
       <FormGroup>
       <Label for="date"> Date </Label>
        <Input className="form-control-lg" id="date" type="date" name="date" value={dayEditFormData.date} onChange={handleChange}></Input>
       </FormGroup>
       <FormGroup>
       <Label for="weight"> Weight </Label>
        <Input className="form-control-lg" id="weight" placeholder={dayEditFormData.weight} type="text" name="weight" value={dayEditFormData.weight} onChange={handleChange}></Input>
       </FormGroup>

       <Button className="btn-lg" color="success">UPDATE</Button>

       </Form>





      {currentDay.included && <h3 className="display-5 font-weight-bold mt-5 mb-2 text-left"> Entries </h3>}
      {currentDay.included &&
        currentDay.included.map(entry =>
           <div key={entry.id} className="text-left border mb-3">
             <h3 className="mb-1 p-2">
             {entry.attributes.name}
             <Button color="transparent" className="btn-md text-danger float-right">X</Button>
             </h3>
             < Liking />
             <ListGroup>
             <ListGroupItem className="justify-content-between text-light">Net Carbs: <Badge pill>{entry.attributes.net_carbs}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between text-light">Calories: <Badge pill>{entry.attributes.calories}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between text-light">Protein: <Badge pill>{entry.attributes.protein}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between text-light">Fat: <Badge pill>{entry.attributes.fat}</Badge></ListGroupItem>
             </ListGroup>
           </div>

        )
      }


  </div>

   )
}



export default connect(state => ({currentDay: state.currentDay, dayEditFormData: state.dayForm}), { updateDayEditForm, updateDay })(DayEdit);
