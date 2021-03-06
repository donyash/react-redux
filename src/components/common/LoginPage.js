import React, {PropTypes} from 'react';  
import TextInput from '../common/TextInput';  
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux';  
import * as sessionActions from '../../actions/sessionActions';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class LogInPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}, errors: {}};

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials)
    .catch(error =>{
        toastr.error(error);
    });
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="email"
            label="email"
            type="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>
     </div>
      
  );
  }
}

//dpy added
LogInPage.propTypes = {
    actions: PropTypes.object.isRequired,
    errors: React.PropTypes.object    //added
};

function mapStateToProps(state, ownProps) {  
  return {
      logged_in: state.session,
      profile: state.profile
  };
}
function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);