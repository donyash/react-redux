import React, {PropTypes} from 'react';

const Profile = ({profile}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Token</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{profile.user} </td>
                    <td>{profile.token}</td>
                </tr>
            </tbody>
        </table>
    );
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Profile;
