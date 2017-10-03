import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

//For using Mock
//import productApi from '../api/mockProductApi';

//For using API
import productApi from '../api/ProductApi';

//this is our action creator
export function loadProductsSuccess(products){
    //debugger;
    return{ type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function createProductSuccess(product){
    return{type: types.CREATE_PRODUCT_SUCCESS, product};
}
export function updateProductSuccess(product){
    return{type: types.UPDATE_PRODUCT_SUCCESS, product};
}

// export function loginSuccess() {  
//     //alert('sessionAction LOG IN SUCCESS...' );
//     return {type: types.LOG_IN_SUCCESS
//      ,"profile": {"logged_in": true, "user": sessionStorage.getItem('user'), "token": sessionStorage.getItem('jwt')}};
//   }

export function loadProductByIdSuccess(product){
    return{ type: types.LOAD_PRODUCT_BY_ID_SUCCESS, 
        product, "rating": product.starRating};
}

//thunk
export function loadProducts(){
    return function (dispatch){
        dispatch (beginAjaxCall());
        return productApi.getAllProducts()
        .then(
            products => {
                dispatch(loadProductsSuccess(products));
        })
        .catch(
            error => {
                throw (error);
        });
    };
}
export function loadProductById(theId){
    return function (dispatch){
        dispatch (beginAjaxCall());
        
        return productApi.getProductById(theId)
        .then(
            product => {
                dispatch(loadProductByIdSuccess(product));
        })
        .catch(
            error => {
                throw (error);
        });
    };
}