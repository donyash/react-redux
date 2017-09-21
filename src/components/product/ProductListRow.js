import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
    return(
                <tr>
                    <td><Link to={'/product/'+ product.productId}>Details</Link></td>
                    <td>{product.productName} </td>
                    <td>{product.description}</td>
                </tr>
    );
};

ProductListRow.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductListRow;
