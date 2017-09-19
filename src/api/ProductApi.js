import React, {Component} from 'react';

class ProductApi {
   
    static getAllProducts() {
        return fetch('http://localhost:60323/api/Products')
        .then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });


    }
}

export default ProductApi;