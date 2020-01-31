import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';

export default function Registration(props) {
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
        question1,
        question2,
        question3,
        answer1,
        answer2,
        answer3,
        onSubmit,
        onChange,
        avatar,
        onMouseClick,
    } = props;
    return (
        <div className="parent-auth-container container-fluid">
            <div className="auth__grid">
                <div className="registration__aside">
                    <div className="registration__container">
                        <h1>Get Started, its easy</h1>
                        <div className="auth__action">Sign Up</div>
                        <br />
                        <form noValidate onSubmit={onSubmit}>
                            <div className="row">
                                <div className="avatar-upload">
                                    <div className="avatar-preview">
                                        {window.localStorage.getItem(
                                            'image',
                                        ) ? (
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
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="First Name"
                                            name="firstName"
                                            minLength="2"
                                            value={firstName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Last Name"
                                            name="lastName"
                                            minLength="2"
                                            value={lastName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Phone"
                                    name="phone"
                                    value={phone}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="question1">
                                            Security Question
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please add your first security question here..."
                                            name="question1"
                                            value={question1}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="answer1">Answer</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please answer your first security question here..."
                                            name="answer1"
                                            value={answer1}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="question2">
                                            Security Question
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please add your second security question here..."
                                            name="question2"
                                            value={question2}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="answer2">Answer</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please answer your second security question..."
                                            name="answer2"
                                            value={answer2}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="question3">
                                            Security Question
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please add your third security question here..."
                                            name="question3"
                                            value={question3}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group inline__name">
                                        <label htmlFor="answer3">Answer</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Please answer your third security question..."
                                            name="answer3"
                                            value={answer3}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
