import React, {PropTypes} from 'react';
//import ProductApi from '../../api/ProductApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

class ProductsPage extends React.Component {
    constructor(props, context){
        super(props, context);
        
        this.state = {
            product: {name: ""}
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

  onNameChange(event){
      const product = this.state.product;
      product.name = event.target.value;
      this.setState({product: product});
  }
  onClickSave(){
    //alert(`Saving ${this.state.product.name}`);
    //this.props.dispatch(productActions.createProductSuccess(this.state.product));

   // this.props.createProductSuccess(this.state.product);
   
   
    this.props.actions.createProductSuccess(this.state.product);
   
    
  }
  productRow(product, index){
      return(<div key={index}>{product.name} </div>);
  }

    render() {
        return (
            <div>
                <h1>Products </h1>
                {this.props.products.map(this.productRow)}

                <h2>Add Product</h2>
                <input 
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.product.name}/>
                <input 
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save"/>

                {/* <ProductApi /> */}
            </div>
            
        );
    }
}

ProductsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    //dispatch: PropTypes.func.isRequired,
    //createProductSuccess: PropTypes.func.isRequired,
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
        //manual using dispatch
        //createProduct: product => dispatch(productActions.createProductSuccess(product))

        //cleaner method (helper function bindActionCreators)
        actions: bindActionCreators(productActions, dispatch)
    };
}

//export default ProductsPage;
export default connect(mapStateToProps, mapDispatchToProps) (ProductsPage);

//optional mapDispatchToProps version -- see onClickSave for dispatch
//export default connect(mapStateToProps) (ProductsPage);  

