import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class HomePage extends React.Component {  
    constructor(props) {
        super(props);

        //get cred email
        //get access token
        //this.state = {credentials: {email: '', password: ''}, errors: {}};

        //let xx = sessionStorage.getItem('jwt');
        //let yy = state.session();
        //debugger;
        
    }
    render(){
//const{user} = this.props;
//debugger;
        if(this.props.logged_in){
            return (
                <div className="jumbotron">
                    <h1>Acme Web </h1>
                    <p> React, Redux and React Router</p>
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
    logged_in: PropTypes.bool.isRequired
    //user: PropTypes.string.isRequired
};
function mapStateToProps(state, ownProps) {  
    return {
        logged_in: state.session
    };
  }

export default connect(mapStateToProps)(HomePage);