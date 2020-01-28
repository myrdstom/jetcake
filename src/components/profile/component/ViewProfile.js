import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';

function ViewProfile(props) {
    const { email, firstName, lastName, address, phone, avatar, dateOfBirth } = props.profile;
    let fullName;
    // eslint-disable-next-line
    {
        !firstName && !lastName
            ? (fullName = '')
            : (fullName = firstName + ' ' + lastName);
    }
    return (
        <div>
            <div className="get__profile-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="col-md-4">
                                <div className="avatar-upload">
                                    <div className="avatar-preview">
                                        {props.profile.avatar ? (
                                            <img
                                                className="profile__avatar"
                                                src={props.profile.avatar }
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                className="profile__avatar"
                                                src={avatar}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 float-right">
                                <div className="profile__details">
                                    <span>
                                        <strong>{fullName}</strong>{' '}
                                    </span>
                                    <Link to="/create-profile">
                                        <i className="fa fa-pencil float-right edit_button"></i>
                                    </Link>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            {}
                                            <i className="fa fa-envelope-o"></i>
                                            &nbsp;&nbsp;
                                            <span className="profile__element">
                                                {email}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone"></i>
                                            &nbsp;&nbsp;
                                            <span className="profile__element">
                                                {phone}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa fa-address-card"></i>
                                            &nbsp;&nbsp;
                                            <span className="profile__element">
                                                {address}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa fa-calendar"></i>
                                            &nbsp;&nbsp;
                                            <span className="profile__element">
                                                {dateOfBirth}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProfile;
