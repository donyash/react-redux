import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import {browserHistory} from 'react-router';
import DashboardForm from './DashboardForm';

class DashboardPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.closeAlert = this.closeAlert.bind(this);
        this.logout = this.logout.bind(this);
    }

    closeAlert(){
        let parent = document.getElementById("alert-div");
        let child = document.getElementById("alert");
        parent.removeChild(child);
       }
    logout()
    {
        event.preventDefault();
        this.props.actions.logOutUser();
    }

    render() {
        return (
            <div>
                <DashboardForm profile={this.props.profile} 
                               onClick={this.closeAlert}
                               onLogOut={this.logout}/>
            </div>
            
        );
    }
}

DashboardPage.propTypes = {
    actions: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    //debugger;
    return{
            profile: state.session
            //,logged_in: state.session
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage);


//  ngOnInit(): void{
//       console.log('ngOnInit: DashboardComponent');  
//       this.isLoggedIn = this.loginService.isLoggedIn(); 
//       this.loggedInUser = this.loginService.getUserName() == null ? 'Not logged in' :  this.loginService.getUserName();


//LOGIN SERVICE
// import {Injectable} from 'angular2/core'
// import {User} from '../shared/user'
// import {Observable} from 'rxjs/Observable'
 
// @Injectable()
// export class LoginService {
//     private user:User=null;
//     private token:string=null;
//     private uname: string;
//     constructor() { }
//     setLogin(u:User,t:string, uname?:string){
//         this.user = u;
//         this.token = t;
//         this.uname = uname;
//     }
//     getToken():string{
//         return this.token;
//     }
//     getUser(){
//         return this.user;
//     }
//     getUserName(){
//         return this.uname;
//     }
//     isLoggedIn(): boolean{
//     //    var result = this.user!=null && this.token!=null; 
//     //    if( typeof result == "undefined")
//     //     return false;
//     //    //return this.user!=null && this.token!=null; 
//     //    return result;
//       return this.user!=null && this.token!=null; 
//     }
//     logout(){
//         this.user = null;
//         this.token = null;
//     }

//     check(){
//         return Observable.of(this.isLoggedIn);
//     }
// }