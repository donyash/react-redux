import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Profile from '.././common/Profile';

class HomePage extends React.Component {  
    constructor(props) {
        super(props);
       
    }
    render(){
//const{profile} = this.props;
//debugger;
        if(this.props.profile.logged_in){
            return (
                <div className="jumbotron">
                    <h1>Acme Web </h1>
                    <p> React, Redux and React Router</p>
                    {/* <h4>User:{this.props.profile.user} </h4>
                    <p>Token:</p> 
                    {this.props.profile.token} */}
                    <Profile profile={this.props.profile} />

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
    //logged_in: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {  
    return {
        //logged_in: state.session,
        //profile: state.profile
        profile: state.session
        
    };
  }

export default connect(mapStateToProps)(HomePage);