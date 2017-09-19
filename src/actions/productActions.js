import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

//For using Mock
import productApi from '../api/mockProductApi';

//For using API
//import productApi from '../api/ProductApi';

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