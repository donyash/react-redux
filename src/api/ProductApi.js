import React, {Component} from 'react';

class ProductApi {
   
    static requestHeaders() {
      return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`};
    }

    static getAllProducts() {
      const headers = this.requestHeaders();
      const request = new Request('http://localhost:60323/api/Products', {
        method: 'GET',
        headers: headers
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
    static getProductById(theId) {
      const headers = this.requestHeaders();
      const request = new Request('http://localhost:60323/api/Products/' + theId, {
        method: 'GET',
        headers: headers
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }


}

export default ProductApi;