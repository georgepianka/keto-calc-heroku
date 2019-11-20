export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_DAY":
      return action.currentDay

    case "CLEAR_CURRENT_DAY":
      return null

    default:
      return state
  }
}
