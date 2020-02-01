import React from 'react';
import { Link } from 'react-router-dom';

const ViewHeader = props => {
    const { onLogoutClick, isEmpty, avatar } = props;

    return (
        <nav className="shadow navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <strong>JetCake</strong>
                </Link>
                <div className="navbar--center">
                </div>
                <div className="navbar--right">
                    {!isEmpty && (
                        <div>
                            <img src="" alt="" className="rounded-circle" />
                            <span className="profile-button">
                                <span id="avatar">
                                    <Link to="/profile">
                                        {avatar ? (
                                                <img
                                                    id="avatar-image-icon"
                                                    src={avatar}
                                                    alt=""
                                                />
                                            ) : (
                                        <i
                                            id="avatar-icon"
                                            className="fas fa-user-circle"
                                        />
                                            )}
                                    </Link>
                                </span>
                            </span>
                            <button
                                className="btn btn-outline-primary my-2 my-sm-0"
                                type="submit"
                            >
                                <Link
                                    to="/"
                                    className="authentication__register--link"
                                    onClick={onLogoutClick}
                                >
                                    LOGOUT
                                </Link>
                            </button>
                        </div>
                    )}
                    {isEmpty && (
                        <div>
                            <button
                                className="btn btn-basic my-2 my-sm-0"
                                type="submit"
                            >
                                <Link
                                    to="/"
                                    className="authentication__login--link"
                                >
                                    {' '}
                                    <span className="small-font">
                                        <strong>LOGIN</strong>
                                    </span>
                                </Link>
                            </button>
                            <button
                                className="btn btn-outline-primary my-2 my-sm-0"
                                type="submit"
                            >
                                <Link
                                    to="/register"
                                    className="authentication__register--link"
                                >
                                    GET STARTED
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default ViewHeader;
