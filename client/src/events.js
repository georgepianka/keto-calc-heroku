import moment from "moment";

export const events = [
  {
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(moment()),
    end: new Date(moment())
  },
  {
    title: "02:00-06:59",
    start: "2018-03-03 02:00",
    end: "2018-03-03 06:59",
    up_down_ind: "N"
  }
]
