export const updateUserForm = (formData) => {
  return {
    type: "UPDATE_USER_FORM",
    formData
  }
}

export const resetUserForm = () => {
  return {
    type: "RESET_USER_FORM"
  }
}
