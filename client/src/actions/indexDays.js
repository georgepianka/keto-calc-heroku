export const setDays = days => {
  return {
    type: "SET_DAYS",
    days
  }
}

export const clearDays = () => {
  return {
    type: "CLEAR_PLACES"
  }
}

export const addPlace = place => {
  return {
    type: "ADD_PLACE",
    place
  }
}

export const deletePlaceSuccess = placeId => {
  return {
    type: "DELETE_PLACE",
    placeId
  }
}

export const updatePlaceSuccess = place => {
  return {
    type: "UPDATE_PLACE",
    place
  }
}


export const getMyPlaces = () => {
  return dispatch => {
    return fetch("/api/v1/places", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyPlaces(response.data))
        }
      })
      .catch(console.log)
  }
}


export const createPlace = (placeData, history) => {
  console.log("place", placeData, history)
  return dispatch => {
    const sendablePlaceData = {
      name: placeData.name,
      price: placeData.price,
      rating: placeData.rating,
      user_id: placeData.userId,
      address: placeData.address,
      category: placeData.category,
      image_url: placeData.image_url,
      review_count: placeData.review_count,
      visited: placeData.visited
    }
    return fetch("/api/v1/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePlaceData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log(resp.data)
          dispatch(addPlace(resp.data))
          dispatch(resetPlaceForm())
          history.push(`/places/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}


export const updatePlace = (placeData, history) => {
  return dispatch => {
    const sendablePlaceData = {
      price: placeData.price,
      name: placeData.name,
      rating: placeData.rating,
      address: placeData.address,
      category: placeData.category,
      image_url: placeData.image_url,
      review_count: placeData.review_count,
      visited: placeData.visited
    }
    return fetch(`/api/v1/places/${placeData.placeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePlaceData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updatePlaceSuccess(resp.data))
          history.push(`/places/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deletePlace = (placeId, history) => {
  return dispatch => {
    return fetch(`/api/v1/places/${placeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          console.log('no')
          alert(resp.error)
        } else {
          dispatch(deletePlaceSuccess(placeId))
          history.push(`/places`)
        }
      })
      .catch(console.log)
  }
}
