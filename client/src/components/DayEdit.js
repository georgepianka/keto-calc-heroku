import React from 'react'
import { connect } from 'react-redux'
import { dayForm } from '../actions/dayForm';
import { updateDayEditForm } from '../actions/dayForm';
import { updateDay } from '../actions/currentDay';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
  )
}


export default connect(null, { updateDayEditForm, updateDay })(DayEdit);
