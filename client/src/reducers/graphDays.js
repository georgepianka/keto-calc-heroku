const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {

   case "SET_GRAPH_DAYS":
    return action.graphFormattedDays


   case "CLEAR_GRAPH_DAYS":
    return initialState

   default:
    return state;
  }
}
