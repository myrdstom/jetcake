import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import {Link} from "react-router-dom";

function EditProfile(props) {
    const {
        phone,
        firstName,
        lastName,
        dateOfBirth,
        address,
        onSubmit,
        onChange,
        onMouseClick,
    } = props;

    return (
        <div className="create__profile-container">
            <div className="container">
                <div className="text__container">
                    <h1 className="update__profile text-center">
                        Update Your Profile
                    </h1>
                    <h2>
                        {' '}
                        <p className="lead text-center">
                            Let's make your profile awesome!!
                        </p>
                    </h2>
                    <br />
                    <br />
                </div>
                <div className="row">
                    <div className="col-md-3 float-left">
                        <div className="avatar-upload">
                            <div className="avatar-preview">
                                {window.localStorage.getItem('image') ? (
                                    <img
                                        className="profile__avatar"
                                        src={window.localStorage.getItem(
                                            'image',
                                        )}
                                        onClick={onMouseClick}
                                        alt=""
                                    />
                                ) : props.avatar ? (
                                    <img
                                        className="profile__avatar"
                                        src={props.avatar}
                                        onClick={onMouseClick}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="profile__avatar"
                                        src={avatar}
                                        onClick={onMouseClick}
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="icon">
                                <div
                                    className="camera4"
                                    onClick={onMouseClick}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8 float-right">
                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onChange}
                                    id="firstName"
                                />
                                <br />
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onChange}
                                    id="lastName"
                                />
                                <br />
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="phone"
                                    value={phone}
                                    onChange={onChange}
                                    id="lastName"
                                />
                                <br />
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="address"
                                    value={address}
                                    onChange={onChange}
                                    id="lastName"
                                />
                                <br />
                                <label htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={onChange}
                                    id="lastName"
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                                value="Save"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
