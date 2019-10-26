const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {

   case "SET_CALENDAR_DAYS":
    return action.calendarFormattedDays


   case "CLEAR_CALENDAR_DAYS":
    return initialState

   default:
    return state;
  }
}
