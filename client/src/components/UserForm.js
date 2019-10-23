import React from 'react'
import { connect } from 'react-redux'
import { updateUserForm } from '../actions/userForm';


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
  <div>

    <div className="SignupLogin">
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="text" name="email" value={userFormData.email} onChange={handleInputChange}></input>
        {isSignup ?
          <input placeholder="Username" type="text" name="username" value={userFormData.username} onChange={handleInputChange}></input>
        :null}
        <input placeholder="Password" type="text" name="password" value={userFormData.password} onChange={handleInputChange}></input>
        <input type="submit" value="Log In" ></input>
      </form>
    </div>
  </div>
  )
}



export default connect(state => ({userFormData: state.userForm}),{ updateUserForm })(UserForm);
