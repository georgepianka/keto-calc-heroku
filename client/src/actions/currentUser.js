//import { otherAction } from "./otherAction.js";

import { getDays, clearDays } from "./userDays.js"
import { resetUserForm } from "./userForm.js"


const headers = {
'Accept': 'application/json',
'Content-Type': 'application/json'
}

export const setCurrentUser = currentUser => {
  return {
    type: "SET_CURRENT_USER",
    currentUser
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("/api/v1/get_current_user", {
      method: "GET",
      headers: headers,
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {

          setTimeout(() => {
            alert(response.error)
          }, 1000)

        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getDays())
        }
      })
  }
}

export const login = (credentials, history ) => {
  console.log('credentials are:', credentials)
  return dispatch => {
    return fetch("/api/v1/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getDays())
          dispatch(resetUserForm())
          history.push('/')
        }
      })
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: headers,
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getDays())
          dispatch(resetUserForm())
          history.push('/')
        }
      })
  }
}

export const facebookLogin = (accessToken, userID, history) => {
  const data = {
    token: accessToken,
    uid: userID
  }
  return dispatch => {
    return fetch("/api/v1/auth/facebook_login", {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(getDays())
        //dispatch(otherAction())
        history.push('/')
      }
    })
  }
}

export const logout = (history) => {
  return dispatch => {
    return fetch('/api/v1/logout', {
      method: "DELETE"
    }).then(r => r.json())
    .then(response => {
      dispatch(clearCurrentUser())
      dispatch(clearDays())
      //dispatch(otherAction())
      history.push('/')
      window.FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
            window.FB.logout(()=> window.FB.XFBML.parse())

        }
        else {
            window.FB.XFBML.parse()
            //This function parses and renders XFBML markup in a document on the fly.
            //Reloads Button When window.FB.logout(); in Logout Component is called.
        }

      })

      setTimeout(() => {
        alert(response.notice)
      }, 1500)
    })
  }
}
