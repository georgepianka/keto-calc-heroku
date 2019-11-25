import React from 'react'
import { connect } from 'react-redux'
import { dayForm } from '../actions/dayForm';
import { updateUserForm } from '../actions/userForm';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ketoCalc from '../styles/ketocalc.jpg';



const DayEdit = () =>

<h1> HELLO FRIEND </h1>



/*

const DayEdit = ( {currentDay, dayForm, updateUserForm, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...userFormData,
      [name]: value
        }
    updateUserForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //userFormSubmit(userFormData, history)
  }

  return (
      <Form className="mb-3" onSubmit={handleSubmit}>
       <FormGroup>
        <Input className="form-control-lg" placeholder="Email" type="text" name="email" value={userFormData.email} onChange={handleInputChange}></Input>
       </FormGroup>
       <FormGroup>
        <Input className="form-control-lg" placeholder="Password" type="text" name="password" value={userFormData.password} onChange={handleInputChange}></Input>
       </FormGroup>
       <FormGroup>
          <Input className="form-control-lg" placeholder="Username" type="text" name="username" value={userFormData.username} onChange={handleInputChange}></Input>
       </FormGroup>

       <Button className="btn-lg" color="success">SignUp</Button>

       </Form>
  )
}

*/

export default connect(state => ({userFormData: state.userForm}),{ updateUserForm })(DayEdit);
