import { combineReducers } from 'redux'
import counter from './counter'
import banner from './banner'

export default combineReducers({
  counter,
  banner
})
