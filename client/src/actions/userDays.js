import { setCalendarDays } from "./calendarDays.js"
import { setGraphDays } from "./graphDays.js"

export const setDays = days => {
  return {
    type: "SET_DAYS",
    days
  }
}

export const clearDays = () => {
  return {
    type: "CLEAR_DAYS"
  }
}

const headers = {
'Accept': 'application/json',
'Content-Type': 'application/json'
}

export const getDays = () => {
  return dispatch => {
    return fetch("/api/v1/days", {
      method: "GET",
      headers: headers,
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setDays(response.data))
          dispatch(setCalendarDays(response.data))
          dispatch(setGraphDays(response.data))
        }
      })

  }
}
