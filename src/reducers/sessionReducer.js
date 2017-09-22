import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState.session, action) {  
  //debugger;
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      Object.assign({}, state, {logged_in: true});
      return !!sessionStorage.jwt;
    case types.LOG_OUT:
      Object.assign({}, state, {logged_in: false});
      return !!sessionStorage.jwt;
    case types.LOG_IN_FAILURE:
      Object.assign({}, state, {logged_in: false});
      return false;
    default: 
      return state;
  }
}