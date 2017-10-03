import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';
import toastr from 'toastr';
import {getProductById} from '../../selectors/selectors';

export class ManageProductPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            product: Object.assign({}, props.product),
            rating: Object.assign({}, props.rating)  //ok to set state directy
        };
        this.getStarRating = this.getStarRating.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.product.productId != nextProps.product.productId){
            //necessary to populate form when existing product is loaded directly
            this.setState({product: Object.assign({}, nextProps.product)});
            this.setState({rating: Object.assign({}, nextProps.rating)});
        }
    }

    getStarRating(event){
        event.preventDefault();
        //toastr.warning('message from getStarRating');
        //const productId = event.ownProps.params.id;  //from the path '/product/:id'
        const productId = 2;
        this.props.actions.loadProductById(productId);  //will pass id 
    }

    render() {
        return (
             <ProductForm 
             product={this.props.product}
             onGetStarRating={this.getStarRating} 
             rating={this.props.rating}/>
        );
    }
}

ManageProductPage.propTypes = {
    product: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    rating: PropTypes.number
};
ManageProductPage.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps (state, ownProps) {
    const productId = ownProps.params.id;  //from the path '/product/:id'
    let product={id: '', name: '', description: '', availability: '', code: ''};

    if(productId && state.products.length > 0){
        product = getProductById(state.products, productId);
    }
   
    let rating=null;
    rating = state.products.rating; 
    //debugger;
    return {
        product: product,
        rating: rating    //this was not the same object
    };
}

function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators(productActions, dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);