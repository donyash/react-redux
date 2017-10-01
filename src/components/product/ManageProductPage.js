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
            product: Object.assign({}, props.product)
        };
        this.getStarRating = this.getStarRating.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.product.productId != nextProps.product.productId){
            //necessary to populate form when existing product is loaded directly
            this.setState({product: Object.assign({}, nextProps.product)});
        }
    }

    getStarRating(event){
        event.preventDefault();
        toastr.warning('message from getStarRating');
    }

    render() {
        return (
             <ProductForm 
             product={this.props.product}
             onGetStarRating={this.getStarRating} />
        );
    }
}

ManageProductPage.propTypes = {
    product: PropTypes.object.isRequired
};
ManageProductPage.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps (state, ownProps) {
    const productId = ownProps.params.id;  //from the path '/product/:id'
    let product={id: '', name: '', description: '', availability: '', code: ''};
    //debugger;

    if(productId && state.products.length > 0){
        product = getProductById(state.products, productId);
    }
   
    return {
        product: product
    };
}

function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators(productActions, dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);