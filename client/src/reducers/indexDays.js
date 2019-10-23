const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
   case "SET_DAYS":
    return action.days

  case "ADD_DAY":
    return state.concat(action.day)

  case "UPDATE_DAY":
    return state.map(day => day.id === action.day.id ? action.day : day)

  case "DELETE_DAY":
    return state.filter(day =>day.id === action.dayId ? false : true)

  case "CLEAR_DAYS":
    return initialState

    default:
      return state;
  }
}
