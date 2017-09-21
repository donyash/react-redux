import React, {PropTypes} from 'react';
//import ProductApi from '../../api/ProductApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
import {browserHistory} from 'react-router';

class ProductsPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

  productRow(product, index){
      return(<div key={index}>{product.productName} </div>);
  }

    render() {
        const{products} = this.props;

        return (
            <div>
                <h1>Products </h1>
                {/* {this.props.products.map(this.productRow)} */}
                <ProductList products={products} />
            </div>
            
        );
    }
}

ProductsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return{
            products: state.products
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsPage);