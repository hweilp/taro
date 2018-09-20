import * as types from '../types'

const INITIAL_STATE = {
  userInfo: {}
}

export default function userInfo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GETBANNERLIST:
      return {
        ...state,
        userInfo: action.val
      }
    default:
      return state
  }
}
