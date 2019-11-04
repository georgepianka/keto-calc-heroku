export const updatePlaceForm = (name, value) => {
  const placeFormData = { name, value }
  return {
    type: "UPDATE_NEW_PLACE_FORM",
    placeFormData
  }
}

export const resetPlaceForm = () => {
  return {
    type: "RESET_NEW_PLACE_FORM",
  }
}
