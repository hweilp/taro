import {
  GETTABBARLIST
} from '../types'

export const getTabBarList = () => {
  return {
    type: GETTABBARLIST
  }
}

// 异步的action
export function asyncGetTabBarList () {
  return dispatch => {
    dispatch(getTabBarList())
  }
}
