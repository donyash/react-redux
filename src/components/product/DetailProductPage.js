//THIS NEEDS TO BE A FULL CLASS 
//with load to perform fetch
//
// rename this to ManageProductPage
//  update route.js
// create a ProductForm page
// put the markup in there and reference it ManageProductPage
//
// create another method in ProductApi for fetcing
//   by id  
//  see how tricky use of route param in ManageCoursePage
//
//
// create dashboard component
//  helpers for user and isloggedin
//  see kurata for same usage
//
//start to pull out hard code domain for requests
//
//cleanup where needed
//
//more unit testing
//
// start reviewing React-Redux principles

import React, {PropTypes} from 'react';

 const DetailProductPage = () =>{ 
         return (<div>Todo - build protected page content</div>
        );
    };

   
 export default DetailProductPage;

// const DetailProductPage = ({product}) =>{ 
//         return (
//                 <div className="panel panel-primary">
//                     <div className="panel-heading" style="font-size:large">
//                         {product.productName}
//                     </div>
                    
//                     <div className="panel-body">
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="row">
//                                     <div className="col-md-3">Name:</div>
//                                     <div className="col-md-6">{product.productName}</div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-3">Code:</div>
//                                     <div className="col-md-6">{product.productCode}</div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-3">Description:</div>
//                                     <div className="col-md-6">{product.description}</div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-3">Availability:</div>
//                                     <div className="col-md-6">{product.releaseDate}</div>
//                                 </div>
//                         </div>
//                     </div> 
//                 </div>
//             </div>
//         );
    
// };

// DetailProductPage.propTypes = {
//     product: React.PropTypes.object.isRequired
// };

//
