import moment from "moment";

// moment('2017-06-10T16:08:00').format('MM/DD/YYYY')
// var d = new Date(2018, 11, 24);
// new Date(moment("09/25/19"));

export const events = [
  { title: "NetCarbs: 20",
    allDay: true,
    start: new Date(moment("09/25/19")),
    end: new Date(moment("09/25/19")),
    id: 2
  },

  { title: "Calories: 1500",
    allDay: true,
    start: new Date(moment()),
    end: new Date(moment())
  },

  { title: "Weight: 190",
    allDay: true,
    start: new Date(moment()),
    end: new Date(moment())
  }
]



export const setCalendarDays = days => {
  const calendarFormattedDays = days.map(day =>
        (
          { title: `NetCarbs: ${day.attributes.total_net_carbs}`,
            allDay: true,
            start: day.date,
            end: day.date,
            id: day.id
          },
          { title: `Calories: ${day.attributes.total_calories}`,
            allDay: true,
            start: day.date,
            end: day.date,
            id: day.id
          },
          { title: `Weight: ${day.attributes.weight}`,
            allDay: true,
            start: day.date,
            end: day.date,
            id: day.id
          }
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
