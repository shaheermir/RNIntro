import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types'

export const createEmailUpdateAction = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

export const createPasswordUpdateAction = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}
