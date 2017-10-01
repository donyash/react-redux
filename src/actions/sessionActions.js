
import * as types from './actionTypes';  
import sessionApi from '../api/SessionApi';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export function loginSuccess() {  
  //alert('sessionAction LOG IN SUCCESS...' );
  return {type: types.LOG_IN_SUCCESS
   ,"profile": {"logged_in": true, "user": sessionStorage.getItem('user'), "token": sessionStorage.getItem('jwt')}};
}

export function loginFailure() {  
  //alert('sessionAction LOG IN FAILURE...' );
  return {type: types.LOG_IN_FAILURE, "profile": {"logged_in": false, "user": null, "token": null }};
}

export function receiveLogout() {
  //alert('sessionAction receive log out...' );
  return {type: types.LOG_OUT,"profile": {"logged_in": false, "user": null, "token": null }};
}

export function logOutUser() {  
  return dispatch => {
    //dispatch(requestLogout())
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('user');
    toastr.info('Log out successful');
    dispatch(receiveLogout());
    browserHistory.push('/'); 
  };
}

export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
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