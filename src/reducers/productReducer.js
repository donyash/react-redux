import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state=initialState.products, action){
    switch(action.type){
        case types.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        case types.CREATE_PRODUCT_SUCCESS:
          return [
              ...state,
              Object.assign({}, action.product)
            ];
         case types.UPDATE_PRODUCT_SUCCESS:
             return[
                 ...state.filter(product => product.id !== action.product.id),
             Object.assign({}, action.product)
             ];
        
         case types.LOAD_PRODUCT_BY_ID_SUCCESS:
             //alert('product reducer LOAD_PRODUCT_BY_ID_SUCCESS run: RATING'+ action.rating);
             
                //  return [
                //      ...state,
                //      Object.assign({}, action.rating)
                //    ];
                
                return Object.assign({}, state, {    //worked for just rating, everything else wiped out
                    rating: action.rating
                  });

              
               
          default:
            return state;
    }
}