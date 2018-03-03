import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import { EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS, CLEAR_EMPLOYEE_FORM } from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch(clearEmployeeForm())
        Actions.pop()
      })
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const employeeSaveChanges = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    return firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch(clearEmployeeForm())
        Actions.pop()
      })
  }
}

export const clearEmployeeForm = () => ({
  type: CLEAR_EMPLOYEE_FORM
})

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    return firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop()
      })
  }
}
