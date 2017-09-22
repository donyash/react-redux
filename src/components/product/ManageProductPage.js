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
    }

    componentWillReceiveProps(nextProps){
        if(this.props.product.productId != nextProps.product.productId){
            //necessary to populate form when existing product is loaded directly
            this.setState({product: Object.assign({}, nextProps.product)});
        }
    }

    render() {
        return (
             <ProductForm product={this.props.product} />
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