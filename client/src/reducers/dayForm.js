const initialState = {
  date: "",
  weight: ""
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_DAY_EDIT_FORM":
      return action.formData

    case "RESET_DAY_EDIT_FORM":
      return initialState

    case "SET_DAY_EDIT_FORM":
      return action.dayFormData

    default:
      return state
  }
}
