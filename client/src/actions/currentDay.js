
import { getDays } from "./userDays.js"
import { setDayEditForm } from "./dayForm.js"

const headers = {
'Accept': 'application/json',
'Content-Type': 'application/json'
}

export const setCurrentDay = currentDay => {
  return {
    type: "SET_CURRENT_DAY",
    currentDay
  }
}

export const clearCurrentDay = () => {
  return {
    type: "CLEAR_CURRENT_DAY"
  }
}
export const createDay = (dayDate, history) => {
  console.log("c")
  return dispatch => {
    const dayData = {
      date: dayDate
    }
    return fetch("/api/v1/days", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dayData)
    })
      .then(r => r.json())
      .then(resp => {
        console.log("d")
        //console.log(resp.data)
          dispatch(setCurrentDay(resp))
          dispatch(setDayEditForm(resp.data))
          history.push(`/log/days/${resp.data.id}/edit`)
          dispatch(getDays())

      })
  }
  console.log("e")
}

export const updateDay = (dayEditFormData, dayId, history) => {
  return dispatch => {

    return fetch(`/api/v1/days/${dayId}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(dayEditFormData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log(resp.data)
          dispatch(setCurrentDay(resp))
          dispatch(setDayEditForm(resp.data))
          history.push(`/log/days/${resp.data.id}/edit`)
          dispatch(getDays())
        }
      })
  }
}
