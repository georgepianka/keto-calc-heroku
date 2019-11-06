
export const createDay = (dayData, history) => {
  return dispatch => {

    return fetch("/api/v1/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dayData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log(resp.data)
          dispatch(setDay(resp.data))
          dispatch(resetDayForm())
          history.push(`/log/days/${resp.data.id}/edit`)
        }
      })
  }
}
