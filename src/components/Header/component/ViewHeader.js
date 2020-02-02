import React from 'react';
import { Link } from 'react-router-dom';

const ViewHeader = props => {
    const { onLogoutClick, isEmpty, avatar } = props;

    return (
        <div>
            <span className="newSideBar">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <i className="fa fa-bars" id="btn" />
                    <i className="fa fa-times" id="cancel" />
                </label>

                <div className="sidebar">
                    <header>JetCake</header>
                    {!isEmpty && (
                        <ul>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={onLogoutClick}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    )}
                    {isEmpty && (
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Get Started</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </span>
            <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <strong>JetCake</strong>
                    </Link>
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
                                        to="/login"
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
        </div>
    );
};

export default ViewHeader;
