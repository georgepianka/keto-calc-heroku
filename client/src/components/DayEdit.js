import React from 'react'
import { connect } from 'react-redux'
import { dayForm } from '../actions/dayForm';
import { updateDayEditForm } from '../actions/dayForm';
import { updateDay } from '../actions/currentDay';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import ketoCalc from '../styles/ketocalc.jpg';





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
    updateDay(dayEditFormData, currentDay.id, history)
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






  {/*
         {currentDay.included.length > 0 ?
           currentDay.included.map(entry => (
           <div>
             <h3> {entry.attributes.name} </h3>
             <ListGroup>
             <ListGroupItem className="justify-content-between">Net Carbs: <Badge pill>{entry.attributes.net_carbs}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between">Calories: <Badge pill>{entry.attributes.calories}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between">Protein: <Badge pill>{entry.attributes.protein}</Badge></ListGroupItem>
             <ListGroupItem className="justify-content-between">Fat: <Badge pill>{entry.attributes.fat}</Badge></ListGroupItem>
             </ListGroup>
           </div>

         )) : null}
  */}

  </div>

   )
}



export default connect(null, { updateDayEditForm, updateDay })(DayEdit);
