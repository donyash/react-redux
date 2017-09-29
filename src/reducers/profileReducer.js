import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function profileReducer(state = initialState.profile, action) {  
  switch(action.type) {
    case "USER_TOKEN_SUCCESS":
     alert('message from PROFILE reducer USER TOKEN SUCCESS');
    //debugger;
    // return Object.assign({}, state, {profile: action.token});  sort of
   return Object.assign({}, state,  { profile: {logged_in: true, user: sessionStorage.getItem('user'), token: sessionStorage.getItem('jwt')}});  
    //above worked as object goint to view but could not render

    //next line almost there
    //return Object.assign({}, state,  [ {user: "meeee", token: sessionStorage.getItem('jwt')}]);  
    
    //this worked except the object assign missing
    //return  {user: "meeeexx", token: "JDJFKDJ"}; 

    //alert(action.token);
    //this is working but when rendered causes a waring in console.....renders ok though
    // but the state is not updated, shows the previous token on the page

    //NOT REALLY THE CAUSE....
    //return Object.assign({}, state, {user: sessionStorage.getItem('user'), token: action.token});
    
    //not worked either
    //return {user: sessionStorage.getItem('user'), token: action.token};

    //this did not work 
    // return [
    //     ...state,
    //     Object.assign({}, {user: sessionStorage.getItem('user'), token: action.token})
    //   ];
    //return state;
    default: 
      return state;
  }
}