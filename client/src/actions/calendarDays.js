import moment from "moment";

// startDate: moment().format("YYYY-MM-DD"),
// moment('2017-06-10T16:08:00').format('MM/DD/YYYY')
// var d = new Date(2018, 11, 24);
// new Date(moment("09/25/19"));

export const setCalendarDays = days => {
  const calendarFormattedDays = days.flatMap(day =>
        (
          [{ title: `NetCarbs: ${day.attributes.total_net_carbs}`,
            allDay: true,
            start:  new Date(moment(day.attributes.date)),
            end: new Date(moment(day.attributes.date)),
            id: day.id
          },
          { title: `Calories: ${day.attributes.total_calories}`,
            allDay: true,
            start: new Date(moment(day.attributes.date)),
            end: new Date(moment(day.attributes.date)),
            id: day.id
          },
          { title: `Weight: ${day.attributes.weight}`,
            allDay: true,
            start: new Date(moment(day.attributes.date)),
            end: new Date(moment(day.attributes.date)),
            id: day.id
          },
        ]
        )
  )
  return {
    type: "SET_CALENDAR_DAYS",
    calendarFormattedDays
  }
}

export const clearCalendarDays = () => {
  return {
    type: "CLEAR_CALENDAR_DAYS"
  }
}
