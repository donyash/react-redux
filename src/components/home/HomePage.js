import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Profile from '.././common/Profile';

class HomePage extends React.Component {  
    constructor(props) {
        super(props);
       
    }
    render(){
        if(this.props.profile.logged_in){
            return (
                <div className="jumbotron">
                    <h1>Acme Web </h1>
                    <p> React, Redux and React Router</p>
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
    profile: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {  
    return {
        profile: state.session
    };
  }

export default connect(mapStateToProps)(HomePage);