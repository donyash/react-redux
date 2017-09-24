import React, {Component} from 'react';

class SessionApi {  
    
    static login(credentials) {
      
      const request = new Request('http://localhost:60323/Token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        body: "username=" + credentials.email + "&password=" + credentials.password + "&grant_type=password"
      });

      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
    
    
    static getUserTokenFromStorage(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let token = sessionStorage.getItem('jwt');   //works
         // let profile = {"profile": {"user": "me", "token": token}};
         // alert('token in SessionAPI' + token);
         // alert('profile.user in SessionAPI' + profile.user);
         // alert('profile.token in SessionAPI' + profile.token);
         //let token = {"profile": {"user": "me", "token": sessionStorage.getItem('jwt')}};
          resolve(token);
        });
      });
    }

   
}
  
export default SessionApi;  