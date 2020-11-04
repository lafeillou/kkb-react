// import {reducerName} from './reducer'
// import {createStore} from 'redux'
import {createStore, combineReducers} from '../kredux/index'

const INITIAL_STATE = {
  count: 0
};
export const counterReducer = (state = INITIAL_STATE, {type}) => {
  switch(type) {
    case 'ADD':
      return Object.assign({}, state, { count: state.count + 1});
    case 'MINUS':
      return Object.assign({}, state, { count: state.count -1});
    case 'RESET':
      return Object.assign({}, state, { count: 0});
    default:
      return state
  }
}

export const resetReducer = (state = {count: 1}, {type}) => {
  switch(type) {
    case 'MUTIPULE':
      return Object.assign({}, state, { count: state.count * 2});
    case 'RESET': 
      return Object.assign({}, state, { count: 1});
    default:
     return state
  }
}
const reducers = combineReducers({counterReducer, resetReducer})

const store = createStore(reducers)

// const store = createStore(counterReducer)
export default store