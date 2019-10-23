const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {

   case "SET_DAYS":
    return action.days


   case "CLEAR_DAYS":
    return initialState

   default:
    return state;
  }
}
