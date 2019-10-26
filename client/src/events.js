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
  },
]
