import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <ProductListRow key={product.productId} product={product} />
                )}
            </tbody>
        </table>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;
