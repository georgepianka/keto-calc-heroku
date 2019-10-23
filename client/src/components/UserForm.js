import React from 'react'
import { connect } from 'react-redux'
import { updateUserForm } from '../actions/userForm';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FacebookLoginBtn from './FacebookLoginButton';
import ketoCalc from '../styles/ketocalc.jpg';


const UserForm = ( {isSignup, userFormData, updateUserForm, userFormSubmit, history }) => {

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
    userFormSubmit(userFormData, history)
  }

  return (

    <div className="info">
    <h1 className="display-5 font-weight-bold">Keto Calc</h1>
    <img src={ketoCalc} className="d-block mx-auto my-3" alt="KetoCalc" style={{width: 100, height: 100, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
    <h4 className="mb-5 font-weight-light">Keeping You In Ketosis</h4>
  <h3 className="my-3 font-weight-bold">{isSignup ? `Sign Up`:`Log In`}</h3>
      <Form className="mb-3" onSubmit={handleSubmit}>
       <FormGroup>
        <Input className="form-control-lg" placeholder="Email" type="text" name="email" value={userFormData.email} onChange={handleInputChange}></Input>
       </FormGroup>
       <FormGroup>
        <Input className="form-control-lg" placeholder="Password" type="text" name="password" value={userFormData.password} onChange={handleInputChange}></Input>
       </FormGroup>
        {isSignup ?
          <>
        <FormGroup>
          <Input className="form-control-lg" placeholder="Username" type="text" name="username" value={userFormData.username} onChange={handleInputChange}></Input>
        </FormGroup>
          <Button className="btn-lg" color="success">Signin</Button>
          </>
        : <Button className="btn-lg" color="primary">Login</Button>}


      </Form>

      <FacebookLoginBtn />
    </div>
  )
}



export default connect(state => ({userFormData: state.userForm}),{ updateUserForm })(UserForm);
