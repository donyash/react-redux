import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

import * as sessionActions from '../actions/sessionActions';
import {bindActionCreators} from 'redux';  

class App extends React.Component {
    render() {
       // debugger;
       // const{profile} = this.props;
        
        return (
           <div className="container-fluid">
               <Header loading={this.props.loading} profile={this.props.profile}/>
                {this.props.children}
           </div> 
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        profile: state.session
        //logged_in: state.session
    };
}


function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(mapStateToProps)(App);
