import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({product, onGetStarRating, rating}) =>{
     return(
         <form>
             <h1>Product Details</h1>
                <div className="panel panel-primary">
                     <div className="panel-heading">
                         {product.productName}
                     </div>
                     {!rating  &&
                     <div className="panel-body">
                         <div className="row">
                             <div className="col-md-6">
                                 <div className="row">
                                     <div className="col-md-3">Name:</div>
                                     <div className="col-md-6">{product.productName}</div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-3">Code:</div>
                                     <div className="col-md-6">{product.productCode}</div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-3">Description:</div>
                                     <div className="col-md-6">{product.description}</div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-3">Availability:</div>
                                     <div className="col-md-6">{product.releaseDate}</div>
                                 </div>

                                 <div className="row">
                                    <div className="col-md-3">Price:</div>
                                    <div className="col-md-6">{product.price}</div>
                                </div>
                
                                <div className="col-md-6">
                                    <img className="center-block img-responsive" 
                                        src={product.imageUrl}
                                        title={product.productName} />
                                </div> 
                                <div className="col-sm-3">
                                    <button  className="btn btn-warning"
                                             onClick={onGetStarRating} >
                                    Get Star Rating
                                    </button>
                                </div>
                         </div>
                     </div> 
                    
                 </div>
                 }
                 {rating  &&
                    <div className="panel-body">
                         <div className="row">
                             <div className="col-md-6">
                                <div>
                                 <span className="label label-danger">Star Rating</span> {rating}
                                </div>
                             </div>
                        </div>
                    </div>
                   
                 }
                 <div className="panel-footer">
                        <a className="btn btn-default" href="/products">
                            <i className="glyphicon glyphicon-chevron-left"></i> Back
                        </a>
                </div>
             </div>
         </form>
     );
    };
    ProductForm.propTypes = {
        product: React.PropTypes.object.isRequired,
        onGetStarRating: React.PropTypes.func.isRequired,
        rating: React.PropTypes.number
    };

    export default ProductForm;
