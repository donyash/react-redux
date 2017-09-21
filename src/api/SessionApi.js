import React, {Component} from 'react';

class SessionApi {  
    
    static login(credentials) {
      
      // formatUserLogin(credentials){
      //    return "username=" + credentials.email + "&password=" + credentials.password + "&grant_type=password";
      // }
      
      const request = new Request('http://localhost:60323/Token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }, 
        //body: JSON.stringify({auth: credentials} + &grant_type=password)
        //body: `username=don.yash@nwnatural.com&password=password&grant_type=password`
        //body: formatUserLogin(credentials)
        body: "username=" + credentials.email + "&password=" + credentials.password + "&grant_type=password"
      });

      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    } 

   
}
  
export default SessionApi;  