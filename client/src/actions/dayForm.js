export const updateDayEditForm = (name, value) => {
  const dayFormData = { name, value }
  return {
    type: "UPDATE_DAY_EDIT_FORM",
    dayFormData
  }
}

export const resetDayEditForm = () => {
  return {
    type: "RESET_DAY_EDIT_FORM",
  }
}

export const setDayEditForm = day => {
  const dayFormData = {
    date: day.attributes.date,
    weight: day.attributes.weight || 0
    }
  return {
    type: "SET_DAY_EDIT_FORM",
      dayFormData
  }
}
