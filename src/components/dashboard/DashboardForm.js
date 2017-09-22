import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const DashboardForm = ({user, onClick, onLogOut}) =>{
  

     return(
         
         <form>
              <h1>Dashboard</h1>

                <div id="alert-div" className="panel-body">
                    <div id="alert" className="text-center alert alert-success" role="alert">
                        <button id="alert-button" type="button" className="close" 
                                aria-label="Close"
                                onClick={onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {user} authenticated
                    </div>
                </div>

                <div className="panel panel-primary">
                        <div className="panel-heading">
                            Dashboard 
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="text-center">You are logged in.</div>
                                    <h3 className="text-center">{user}</h3>                      
                                    <div className="text-center">
                                            <div>
                                                <button type="button" 
                                                        onClick={onLogOut}
                                                        className="btn btn-default">Logout
                                                </button>
                                            </div>
                                    </div>
                            </div>
                        </div>
                </div>
        </form>
     );
     
    };
    DashboardForm.propTypes = {
        user: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,
        onLogOut: React.PropTypes.func.isRequired
    };

    export default DashboardForm;