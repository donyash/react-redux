import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState.session, action) {  
  //debugger;
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return !!sessionStorage.jwt;
    case types.LOG_OUT:
      return !!sessionStorage.jwt;
    case types.LOG_IN_FAILURE:
      // return Object.assign({}, state, {
      //   logged_in: false
      // });
      return false;
    default: 
      return state;
  }
}