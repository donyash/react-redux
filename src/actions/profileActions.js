import sessionApi from '../api/SessionApi';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export function getUserTokenSuccess(token){
    //alert('message from profileAction');
    toastr.warning(token);
      return{ type: "USER_TOKEN_SUCCESS", token};
  }
  
  export function getUserToken(){
      return function (dispatch) {
          return sessionApi.getUserTokenFromStorage()
          .then(
              token => {
                  dispatch(getUserTokenSuccess(token));
          })
          .catch(
              error => {
                  throw (error);
          });
      };
  }