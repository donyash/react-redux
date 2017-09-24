import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class HomePage extends React.Component {  
    constructor(props) {
        super(props);
        
    }
    render(){
//const{profile} = this.props;
//debugger;
        if(this.props.logged_in){
            return (
                <div className="jumbotron">
                    <h1>Acme Web </h1>
                    <p> React, Redux and React Router</p>
                    <h4>User:{this.props.profile.user} </h4>
                    <p>Token:</p> 
                    {this.props.profile.token}
                </div>
            );
        }else{
            return (
                <div className="jumbotron">
                    <h1>Acme Web </h1>
                    <p> React, Redux and React Router</p>
                    <Link to="/login" className="btn btn-primary btn-lg">Log in</Link>
                </div>
            );
        }
       
    }
}
HomePage.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    profile: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {  
    return {
        logged_in: state.session,
        profile: state.profile
    };
  }

export default connect(mapStateToProps)(HomePage);