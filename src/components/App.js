import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

import * as sessionActions from '../actions/sessionActions';
import {bindActionCreators} from 'redux';  

class App extends React.Component {
    render() {
        return (
           <div className="container-fluid">
               <Header loading={this.props.loading} logged_in={this.props.logged_in}/>
                {this.props.children}
           </div> 
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    logged_in: PropTypes.bool.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        logged_in: state.session
    };
}


function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(mapStateToProps)(App);
