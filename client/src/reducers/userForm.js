const initialState = {
  email: "",
  password: "",
  username: ""
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_USER_FORM":
      return action.formData

    case "RESET_USER_FORM":
      return initialState

    default:
      return state

  }
}
