
import moment from "moment";

// startDate: moment().format("YYYY-MM-DD"),
// moment('2017-06-10T16:08:00').format('MM/DD/YYYY')
// var d = new Date(2018, 11, 24);
// new Date(moment("09/25/19"));


export const setGraphDays = days => {
  const graphFormattedDays = days.sort((a, b) => a.attributes.date>b.attributes.date ? 1 : a.attributes.date<b.attributes.date ? -1 : 0).map(day =>
        (
          [{ y: day.attributes.total_net_carbs, label: moment(day.attributes.date).format("MM/DD") },
           { y: day.attributes.total_calories, label: moment(day.attributes.date).format("MM/DD") },
           { y: day.attributes.weight, label: moment(day.attributes.date).format("MM/DD") }]
        )
  ).reduce((object, set) => {
    object.netCarbs.push(set[0])
    object.calories.push(set[1])
    object.weight.push(set[2])
    return object
  }, {netCarbs:[], calories: [], weight: []})

  return {
    type: "SET_GRAPH_DAYS",
    graphFormattedDays
  }
}

export const clearGraphDays = () => {
  return {
    type: "CLEAR_GRAPH_DAYS"
  }
}
