const initialState = {
  date: "",
  weight: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_DAY_EDIT_FORM":
      const attribute = {
        ...state,
        [action.dayFormData.name]: action.dayFormData.value
      }
      return attribute

    case "RESET_DAY_EDIT_FORM":
      return initialState

    case "SET_DAY_EDIT_FORM":
      return action.dayFormData

    default:
      return state
  }
}
