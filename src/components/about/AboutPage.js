import React from 'react';
import ProductApi from '../../api/ProductApi';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About </h1>
                <p> This app uses React, Redux, React router</p>
                {/* <ProductApi /> */}
            </div>
            
        );
    }
}

export default AboutPage;
