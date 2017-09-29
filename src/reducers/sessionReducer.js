import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState.session, action) {  
  //debugger;
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
    //alert('sessionReducer LOG IN SUCCESS...' );
    
      return Object.assign({}, state, action.profile);
      //return !!sessionStorage.jwt;
    case types.LOG_OUT:
      //alert('sessionReducer LOG OUT...' );
      return Object.assign({}, state, action.profile);
      //return !!sessionStorage.jwt;

    case types.LOG_IN_FAILURE:
      Object.assign({}, state, action.profile);  //, errorMessage: action.message});
      return false;
    default: 
      return state;
  }
}