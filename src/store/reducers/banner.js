import * as types from '../types'

const INITIAL_STATE = {
  list: []
}

export default function banner (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GETBANNERLIST:
      return {
        ...state,
        list: action.val
      }
    default:
      return state
  }
}
