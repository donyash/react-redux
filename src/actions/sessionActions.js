
import * as types from './actionTypes';  
import sessionApi from '../api/SessionApi';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS
    ,logged_in: true,  profile: {user: sessionStorage.getItem('user'), token: sessionStorage.getItem('jwt')}};
}

export function loginFailure() {  
  return {type: types.LOG_IN_FAILURE};
}

export function receiveLogout() {
  return {
    type: types.LOG_OUT
    ,logged_in: false,  profile: {user: "", token: null}
  };
}

export function logOutUser() {  
  return dispatch => {
    //dispatch(requestLogout())
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('user');
    toastr.info('Log out successful');
    dispatch(receiveLogout());
  };
}
  // sessionStorage.removeItem('jwt');
  // sessionStorage.removeItem('user');
  
  // browserHistory.push('/');
  // toastr.info('Log out successful');
  // return {type: types.LOG_OUT};

export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
      //debugger;
      if(response.access_token){
        sessionStorage.setItem('jwt', response.access_token);
        sessionStorage.setItem('user', credentials.email);
        dispatch(loginSuccess());
        toastr.success('Log in successful');
        browserHistory.push('/dashboard');
      }
      else{
        dispatch(loginFailure());
        toastr.error('Username or password not found');
      }
    })
    .catch(error => {
      throw(error);
    });
  };

  
}