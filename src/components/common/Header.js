import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';  
import * as sessionActions from '../../actions/sessionActions';

//const Header = ({loading, logged_in}) => {
class Header extends React.Component {  
    constructor(props) {
        super();
        this.logOut = this.logOut.bind(this);
    }
 
logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
}

 render() {
    //const{profile} = this.props;
    
    if(this.props.profile.logged_in){
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/dashboard" activeClassName="active">Dashboard</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/products" activeClassName="active">Products</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {this.props.loading && <LoadingDots interval={100} dots={20} />}
            {" | "}
            {/* {this.props.logged_in && <a href="/logout">log out</a>} */}
            <a href="/logout" onClick={this.logOut}>log out</a>
        </nav>
    );
   }else{
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/products" activeClassName="active">Products</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {this.props.loading && <LoadingDots interval={100} dots={20} />}
            {" | "}
            <Link to="/login" activeClassName="active">log in</Link>
        </nav>
    );
   }

 }
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {  
    return {
        profile: state.session
    };
  }

  //dpy added
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(sessionActions, dispatch)
    };
}
  
//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);