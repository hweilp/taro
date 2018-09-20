import * as Types from '../types'

export const getUserInfo = (val) => {
  return {
    type: Types.GETUSERINFO,
    val: val
  }
}

export const add = () => {
  return {
    type: Types.ADD
  }
}
export const minus = () => {
  return {
    type: Types.MINUS
  }
}

export const getBannerList = (val) => {
  return {
    type: Types.GETBANNERLIST,
    val: val
  }
}

// 异步的action
export function asyncGetTabBarList () {
  return dispatch => {
    dispatch(getBannerList())
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
