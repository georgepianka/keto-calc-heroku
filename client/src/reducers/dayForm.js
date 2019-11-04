const initialState = {
  date: "",
  price: "",
  rating: 0,
  address: "",
  image_url: "",
  review_count: 0,
  category: "",
  visited: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_NEW_PLACE_FORM":
      const returnVal = {
        ...state,
        [action.placeFormData.name]: action.placeFormData.value
      }
      return returnVal

    case "RESET_NEW_PLACE_FORM":
      return initialState

    case "SET_FORM_DATA_FOR_EDIT":
      return action.editPlaceFormData

    default:
      return state
  }
}
