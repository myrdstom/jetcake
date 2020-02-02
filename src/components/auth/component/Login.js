import React from 'react';
import Alert from '../../layouts/Alert';

export default function Login(props) {
    const { email, password, onChange, onSubmit, message, messageType } = props;
    return (
        <div>
            <div className="login__wrapper">
                <div className="auth__grid">
                    <div className="authentication__aside">
                        <div className="authentication__container">
                            {message ? (
                                <Alert
                                    message={message}
                                    messageType={messageType}
                                />
                            ) : null}
                            <h1>Welcome back</h1>
                            <div className="auth__action">Sign In</div>
                            <br />
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        name="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={onChange}
                                        id="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
